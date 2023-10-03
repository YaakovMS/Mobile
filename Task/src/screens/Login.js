import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, Icon, Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import { LoginStyle } from "../styles/LoginStyle";
import CustomInput from "../components/CostumeInput";

export default function Login({ navigation }) {
  const { registeredUser, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: null, password: null });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateForm = () => {
    const newErrors = { email: null, password: null };

    if (!email) {
      newErrors.email = "Preencha o campo de email";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Digite um email válido";
    }

    if (!password) {
      newErrors.password = "Preencha o campo de senha";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const handleLogin = () => {
    if (validateForm()) {
      if (
        registeredUser &&
        registeredUser.email === email &&
        registeredUser.password === password
      ) {
        console.log("Logado");
        console.log("Email usado:", email);
        console.log("Senha usada:", password);
        navigation.navigate("Home");
      } else {
        setErrors({ ...errors, password: "Credenciais inválidas" });
      }
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const blueColor = "#4B5F83";

  return (
    <ScrollView contentContainerStyle={LoginStyle.container}>
      <Text h3 style={[LoginStyle.heading, { color: blueColor }]}>
        Bem-vindo de volta!
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomInput
          placeholder="Email"
          iconName="envelope"
          iconColor={blueColor}
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
          inputStyle={[LoginStyle.input, { color: blueColor }]}
          errorMessage={errors.email}
        />
        {errors.email && (
          <Text style={LoginStyle.errorMessage}>{errors.email}</Text>
        )}

        <CustomInput
          placeholder="Senha"
          iconName="lock"
          iconColor={blueColor}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
          style={[LoginStyle.input, { color: blueColor }]}
          errorMessage={errors.password}
        />
        {errors.password && (
          <Text style={LoginStyle.errorMessage}>{errors.password}</Text>
        )}
      </View>
      <Button
        title="Entrar"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={[LoginStyle.loginButton, { backgroundColor: blueColor }]}
        titleStyle={LoginStyle.loginButtonText}
        containerStyle={LoginStyle.loginButtonContainer}
        onPress={handleLogin}
      />
      <Button
        title="Criar Conta"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={[LoginStyle.loginButton, { backgroundColor: blueColor }]}
        titleStyle={LoginStyle.loginButtonText}
        containerStyle={LoginStyle.loginButtonContainer}
        onPress={handleSignUp}
      />
    </ScrollView>
  );
}
