import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';

import { useAuth } from '../context/AuthContext';


const Login = ({ navigation }) => {
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

  const handleLogin = ({navigation}) => {
    if (validateForm()) {
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        console.log('Logado');
        console.log('Email usado:', email);
        console.log('Senha usado:', password);
        navigation.navigate('Home');
      } else {
        setErrors({ ...errors, password: 'Credenciais inválidas' });
      }
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const blueColor = '#2196F3';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={[styles.heading, { color: blueColor }]}>
        Bem-vindo de volta!
      </Text>

      <View style={styles.form}>
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
          inputStyle={[styles.input, { color: blueColor }]}
          errorMessage={errors.email}
        />
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
          inputStyle={[styles.input, { color: blueColor }]}
          errorMessage={errors.password}
        />

        {errors.password && <Text style={styles.errorMessage}>{errors.password}</Text>}

        <Button
          title="Entrar"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={[styles.loginButton, { backgroundColor: blueColor }]}
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={handleLogin}
        />
        <Button
          title="Criar Conta"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={[styles.loginButton, { backgroundColor: blueColor }]}
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={handleSignUp}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
  heading: {
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    marginBottom: 15,
  },
  loginButton: {
    borderRadius: 5,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Login;
