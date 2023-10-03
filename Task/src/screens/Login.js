import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';

import { useAuth } from '../context/AuthContext';
import { LoginStyle } from '../styles/LoginStyle'; // Importe o estilo que você deseja

export default function Login({ navigation }) {
  const { registeredUser, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: null, password: null });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateForm = () => {
    const newErrors = { email: null, password: null };

    if (!email) {
      newErrors.email = 'Preencha o campo de email';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Digite um email válido';
    }

    if (!password) {
      newErrors.password = 'Preencha o campo de senha';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const handleLogin = () => {
    if (validateForm()) {
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        console.log('Logado');
        console.log('Email usado:', email);
        console.log('Senha usada:', password);
        navigation.navigate('Home');
      } else {
        setErrors({ ...errors, password: 'Credenciais inválidas' });
      }
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const blueColor = "#4B5F83";

  return (
    <ScrollView contentContainerStyle={LoginStyle.container}>
      <Text h3 style={[LoginStyle.heading, { color: blueColor }]}>
        Bem-vindo de volta!
      </Text>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        leftIcon={
          <Icon
            type="font-awesome"
            name="envelope"
            color={blueColor}
          />
        }
        onChangeText={(value) => setEmail(value)}
        inputStyle={[LoginStyle.input, { color: blueColor }]}
        errorMessage={errors.email}
      />
      {errors.email && <Text style={LoginStyle.errorMessage}>{errors.email}</Text>}

      <Input
        placeholder="Senha"
        leftIcon={
          <Icon
            type="font-awesome"
            name="lock"
            color={blueColor}
          />
        }
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
        inputStyle={[LoginStyle.input, { color: blueColor }]}
        errorMessage={errors.password}
      />
      {errors.password && <Text style={LoginStyle.errorMessage}>{errors.password}</Text>}

      <Button
        title="Entrar"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={[LoginStyle.loginButton, { backgroundColor: blueColor }]}
        titleStyle={LoginStyle.loginButtonText}
        containerStyle={LoginStyle.loginButtonContainer}
        onPress={handleLogin}
      />
      <Button
        title="Criar Conta"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={[LoginStyle.loginButton, { backgroundColor: blueColor }]}
        titleStyle={LoginStyle.loginButtonText}
        containerStyle={LoginStyle.loginButtonContainer}
        onPress={handleSignUp}
      />
    </ScrollView>
  );
}
