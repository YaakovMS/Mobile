import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native';
import { CheckBox, Text } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { useAuth } from "../context/AuthContext"; // Import the context hook
import { SignUpStyle } from '../styles/SignUpStyle'; // Importe o estilo que você deseja


const blueColor = "#4B5F83";

export default function SignUp({ navigation }) {
  const { setRegisteredUser } = useAuth(); // Use the context hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroNome, setErroNome] = useState(null);
  const [erroPassword, setErroPassword] = useState(null);
  const [erroConfirm, setErroConfirm] = useState(null);
  const blueColor = "#4B5F83";
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
      // Checkbox not selected
      setErroConfirm("Você deve aceitar os termos de uso");
      erro = true;
    }

    return !erro;
  };

  const handleSignUp = () => {
    if (validar()) {
      setRegisteredUser({ name, email, password }); // Store the user info in context

      console.log("Conta Nova");
      navigation.navigate("Login");
      console.log("Nome do novo user:", name);
      console.log("Email Novo", email);
      console.log("Senha Nova:", password);
    }
  };

  return (
    <SafeAreaView style={SignUpStyle.container}>
      <ScrollView contentContainerStyle={SignUpStyle.scrollViewContainer}>
        <Text h3 style={[SignUpStyle.heading, { color: blueColor }]}>
          Tell me who are you
        </Text>

        <View style={SignUpStyle.form}>
          <Input
            placeholder="Name"
            onChangeText={setName}
            inputStyle={SignUpStyle.input}
            errorMessage={erroNome}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            inputStyle={SignUpStyle.input}
            errorMessage={erroEmail}
          />
          <Input
            placeholder="Password"
            onChangeText={setPassword}
            inputStyle={SignUpStyle.input}
            errorMessage={erroPassword}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            inputStyle={SignUpStyle.input}
            errorMessage={erroConfirm}
            secureTextEntry
          />
          <CheckBox
            title={"Eu aceito os termos de uso"}
            checkedIcon="check"
            uncheckedIcon="square-o"
            uncheckedColor="#dcdcdc"
            checkedColor = "#4B5F83"
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
  );
}
