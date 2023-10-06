import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { NumeroTelefoneProvider } from './src/components/NumeroTelefoneContext';
import Navegar from './src/components/Navegar';
import NumeroTelefone from './src/components/NumeroTelefone';
import Contatos from './src/components/Contatos';
import Primeira from './src/components/Primeira';
import { RadixIcon } from 'radix-ui-react-native-icons';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();

function Tabs() {
  return (
    <navBottom.Navigator>
      <navBottom.Screen name='Navegar' component={Navegar}
       options={{
        tabBarIcon: () => { 
        return(<RadixIcon name="chat-bubble" size={24} color="#522CDE" />)
        },
        tabBarActiveTintColor: '#522CDE',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: 'Navegar',
        tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold', },
        }} 
      />
      <navBottom.Screen name='Contatos' component={Contatos} 
      options={{
        tabBarIcon: () => { 
        return(<RadixIcon name="person" size={24} color="#522CDE" />)
        },
        tabBarActiveTintColor: '#522CDE',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: 'Contatos',
        tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold', },
        }} 
      />
    </navBottom.Navigator>
  )
}
export default function App() {

  return (
    <NavigationContainer>
      <NumeroTelefoneProvider>
        <navStack.Navigator>
          <navStack.Screen name='TelaInicial' component={Primeira} />
          <navStack.Screen name='SegundaTela' component={NumeroTelefone} />
          <navStack.Screen name='Principal' component={Tabs} 
          options={{
            title: 'Principal',
            headerShown: false,
          }}
          />
        </navStack.Navigator>
      </NumeroTelefoneProvider>
    </NavigationContainer>
  )
}