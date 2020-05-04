import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Profile() {
  return (
    <View style={{  backgroundColor:"white", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:30}}>Profile!</Text>
    </View>
  );
}