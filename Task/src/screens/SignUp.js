import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native';
import { CheckBox, Text } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { useAuth } from "../context/AuthContext";
import { SignUpStyle } from '../styles/SignUpStyle';
import CustomInput from "../components/CostumeInput";

const blueColor = "#4B5F83";

export default function SignUp({ navigation }) {
  const { setRegisteredUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroNome, setErroNome] = useState(null);
  const [erroPassword, setErroPassword] = useState(null);
  const [erroConfirm, setErroConfirm] = useState(null);

  const validar = () => {
    let erro = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErroEmail("Preencha os campos corretamente");
      erro = true;
    } else if (!emailRegex.test(email)) {
      setErroEmail("Digite um email válido");
      erro = true;
    } else {
      setErroEmail(null);
    }
    if (!name) {
      setErroNome("Preencha os campos corretamente");
      erro = true;
    } else {
      setErroNome(null);
    }
    if (!password) {
      setErroPassword("Preencha o campo de senha");
      erro = true;
    } else if (password.length < 6) {
      setErroPassword("A senha deve ter pelo menos 6 caracteres");
      erro = true;
    } else {
      setErroPassword(null);
    }
    if (!confirmPassword) {
      setErroConfirm("Preencha os campos corretamente");
      erro = true;
    } else {
      setErroConfirm(null);
    }

    if (password !== confirmPassword) {
      setErroConfirm("As senhas não são iguais");
      erro = true;
    }

    if (!isSelected) {
      setErroConfirm("Você deve aceitar os termos de uso");
      erro = true;
    }

    return !erro;
  };

  const handleSignUp = () => {
    if (validar()) {
      setRegisteredUser({ name, email, password });
      console.log("Conta Nova");
      navigation.navigate("Login");
      console.log("Nome do novo usuário:", name);
      console.log("Email Novo:", email);
      console.log("Senha Nova:", password);
    }
  };

  return (
    <SafeAreaView style={SignUpStyle.container}>
      <ScrollView contentContainerStyle={SignUpStyle.scrollViewContainer}>
        <Text h3 style={[SignUpStyle.heading, { color: blueColor }]}>
         Bem-Vindo!!
        </Text>

        <View style={SignUpStyle.form}>
          <CustomInput
            placeholder="Name"
            onChangeText={setName}
            inputStyle={SignUpStyle.input}
          />
          {erroNome && (
            <Text style={SignUpStyle.errorMessage}>{erroNome}</Text>
          )}
          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            inputStyle={SignUpStyle.input}
          />
          {erroEmail && (
            <Text style={SignUpStyle.errorMessage}>{erroEmail}</Text>
          )}
          <CustomInput
            placeholder="Password"
            onChangeText={setPassword}
            inputStyle={SignUpStyle.input}
            secureTextEntry
          />
          {erroPassword && (
            <Text style={SignUpStyle.errorMessage}>{erroPassword}</Text>
          )}
          <CustomInput
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            inputStyle={SignUpStyle.input}
            secureTextEntry
          />
          {erroConfirm && (
            <Text style={SignUpStyle.errorMessage}>{erroConfirm}</Text>
          )}
          <CheckBox
            title={"Eu aceito os termos de uso"}
            checkedIcon="check"
            uncheckedIcon="square-o"
            uncheckedColor="#dcdcdc"
            checkedColor="#4B5F83"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
          />
          <Button
            title="Sign Up"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={SignUpStyle.signupButton}
            titleStyle={SignUpStyle.signupButtonText}
            onPress={handleSignUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
