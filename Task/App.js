import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes/Stack';
import MyDrawer from './src/routes/Drawer';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </AuthProvider>
  );
}
