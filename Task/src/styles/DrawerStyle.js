import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useAuth } from "../context/AuthContext";

const GavetaStyle = (props) => {
  const { registeredUser, user } = useAuth();

  // Add a conditional check to prevent accessing properties of null
  const userName = registeredUser ? registeredUser.name : "";
  const userEmail = registeredUser ? registeredUser.email : "";

  // Use state to toggle between sun and moon icons
  const [isSun, setIsSun] = useState(true);

  // Dummy data for projects and activities
  const numProjects = 5; // Replace with the actual number of projects
  const numActivities = 10; // Replace with the actual number of activities

  const toggleDayNight = () => {
    setIsSun(!isSun);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfoContainer}>
          <Image
            source={require("../assets/user.png")}
            style={styles.userImage}
          ></Image>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons
              name="folder-outline"
              size={24}
              color="white"
              style={styles.statIcon}
            />
            <Text style={styles.statText}>{numProjects} Projects</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons
              name="document-text-outline"
              size={24}
              color="white"
              style={styles.statIcon}
            />
            <Text style={styles.statText}>{numActivities} Activities</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={styles.drawerContent}
        contentContainerStyle={styles.drawerContentContainer}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          onPress={toggleDayNight}
          style={styles.bottomMenuItem}
        >
          <Ionicons
            name={isSun ? "sunny-outline" : "moon-outline"}
            size={22}
            color="#4B5F83"
          />
          <Text style={styles.bottomMenuItemText}>
            {isSun ? "Day" : "Night"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.bottomMenuItem}>
          <Ionicons
            name="share-social-outline"
            size={22}
            color="#4B5F83"
          />
          <Text style={styles.bottomMenuItemText}>Tell a friend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9", // Cor de fundo clara
  },
  header: {
    backgroundColor: "#4B5F83", // Cor de fundo do cabeçalho
    paddingVertical: 40, // Aumento do tamanho do cabeçalho
    paddingHorizontal: 10,
    borderBottomColor: "#4B5F83",
    borderBottomWidth: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerContentContainer: {
    // Estilos para o conteúdo da lista de rotas
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 30,
    marginBottom: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 20,
  },
  userEmail: {
    color: "#fff",
    fontSize: 15,
  },
  statsContainer: {
    flexDirection: "row",   //Muda direção dos items projeto e atividade de row para colu
    justifyContent: "space-evenly",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    marginRight: 5,
  },
  statText: {
    color: "#fff",
    fontSize: 15,
  },
  bottomMenu: {
    padding: 10,
    borderTopColor: "#4B5F83",
    borderTopWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  bottomMenuItemText: {
    fontSize: 15,
    color: "#4B5F83"
  },
});

export default GavetaStyle;
