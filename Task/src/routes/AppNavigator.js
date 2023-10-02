import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Drawer';
import MyStack from './Stack';
import { useAuth } from '../context/AuthContext';// Importe o hook useAuth

export default function AppNavigator() {
  const { registeredUser } = useAuth();

  return (
    <NavigationContainer>
      {registeredUser ? <MyDrawer /> : <MyStack />}
    </NavigationContainer>
  );
}