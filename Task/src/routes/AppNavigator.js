// AppNavigator.js (ou outro nome de sua escolha)
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import StackNavigator from './navigators/StackNavigator';
import AuthContext from './context/AuthContext'; // Importe seu contexto de autenticação

export default function AppNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}
