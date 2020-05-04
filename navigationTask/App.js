import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Posts from './screens/Posts'
import Details from './screens/Details'
import Profile from './screens/Profile'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
  const {Navigator : StackNavigator, Screen :StackScreen}=createStackNavigator()
  return (

    <NavigationContainer >
    <MyTabs />
  </NavigationContainer>
     
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Home" component={Home}         options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'purple',
             justifyContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }} /> 
      <Stack.Screen name="Posts" component={Posts} options={{
          title: 'Posts',
          headerStyle: {
            backgroundColor: 'purple',
             justifyContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }} />
      <Stack.Screen name="Details" component={Details} options={{
          title: 'Posts Details',
          headerStyle: {
            backgroundColor: 'purple',
             justifyContent:"center"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}/>
    

    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Posts"     tabBarOptions={{activeTintColor: 'white',
    inactiveTintColor: 'gray',    labelStyle: {
      fontSize: 20,
      padding:10
  
    },  style: {
      backgroundColor: 'purple',
    } }}  >
      <Tab.Screen name="Posts"  component={MyStack} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',

        }}
      />
    </Tab.Navigator>
  );
}