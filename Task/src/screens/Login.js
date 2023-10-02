import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Login({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text> Login </Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default Login;
