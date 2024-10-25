import { View, Text, Image, Pressable } from 'react-native'
import React, {useCallback} from 'react'
import Colors from '../../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()


export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{
      backgroundColor:Colors.CYAN,
      height:'100%',
    }}>
        <Image source={require('./../../assets/images/boneki.png')}
        style={{
            width:'100%',
            height: 500,
        }}
        />
        <View style={{
          padding: 20,
          display: 'flex',
          alignItems: 'center'
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize: 40,
                textAlign: 'center',
                color:Colors.WHITE
            }}>Começa a aprender!</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize: 25,
              textAlign: 'center',
              color:Colors.WHITE
            }}>Basta criar uma conta!</Text>

            <Pressable
            onPress = {onPress}
            style={{
              padding: 25,
              marginTop:100,
              backgroundColor:Colors.YELLOW,
              width: '100%',
              borderRadius: 25
            }}> 
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 30,
                textAlign: 'center',
                color:Colors.DARKBLUE
              }}>Começar</Text>
            </Pressable>

        </View>

    </View>
  )
}