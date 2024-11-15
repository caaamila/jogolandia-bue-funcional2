import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Tabs, useNavigation } from 'expo-router'
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors'
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function TabLayout() {
  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerTransparent:true,
      headerTitle:''
      
    })
  },[])
  return (
   <Tabs
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.MANTISGREEN,
    tabBarStyle: {
       position: 'absolute',
       bottom: 20, 
       left: 20, 
       right: 20,
       elevation: 5, 
       backgroundColor: Colors.WHITE,
       borderRadius: 20, 
       height: 70,
       shadowColor: '#000', 
       shadowOffset: { width: 0, height: 10 },
       shadowOpacity: 0.25,
       shadowRadius: 3.5,
    },
    tabBarShowLabel: false,
   
   }}
   >
    <Tabs.Screen name='home'
    options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon:({color})=><Octicons name="home" size={30} color={color}/>
    }}
    />
    <Tabs.Screen name='jogos'
     options={{
      title: 'Jogos',
      headerShown: false,
      tabBarIcon:({color})=><Ionicons name="game-controller-outline" size={37} color={color} />
    }}
    />
    <Tabs.Screen name='conquistas'
     options={{
      title: 'Conquistas',
      headerShown: false,
      tabBarIcon:({color})=><Octicons name="star" size={30} color={color} />
    }}
    />
    <Tabs.Screen name='profile'
     options={{
      title: 'Perfil',
      headerShown: false,
      tabBarIcon:({color})=><Octicons name="smiley" size={30} color={color}/>
    }}
    />
   </Tabs>
  )
}