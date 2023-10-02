import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native';
import { CheckBox, Text } from "react-native-elements";
import { Button, Input } from "@rneui/themed";
import { TextInputMask } from "react-native-masked-text";
import { useAuth } from "../context/AuthContext"; // Import the context hook

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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text h3 style={[styles.heading, { color: "#2196F3" }]}>
          Tell me who are you
        </Text>

        <View style={styles.form}>
          <Input
            placeholder="Name"
            onChangeText={setName}
            inputStyle={styles.input}
            errorMessage={erroNome}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            inputStyle={styles.input}
            errorMessage={erroEmail}
          />
          <Input
            placeholder="Password"
            onChangeText={setPassword}
            inputStyle={styles.input}
            errorMessage={erroPassword}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            inputStyle={styles.input}
            errorMessage={erroConfirm}
            secureTextEntry
          />
          <CheckBox
            title={"Eu aceito os termos de uso"}
            checkedIcon="check"
            uncheckedIcon="square-o"
            uncheckedColor="#dcdcdc"
            checkedColor="#2196F3"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
          />
          <Button
            title="Sign Up"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={styles.signupButton}
            titleStyle={styles.signupButtonText}
            onPress={handleSignUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  heading: {
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    width: "80%",
  },
  input: {
    marginBottom: 15,
    color: "#2196F3",
  },
  signupButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    width: "100%", // Make the button full width
  },
  signupButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});