import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const DrawerStyle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image  style={styles.UserImage}  source={require('../assets/user.png')}/>
        <Text style={styles.userName}>User.Name</Text>
        <Text style={styles.userMail}>User@mail.com</Text>
        <View style={styles.Counter}>
        <Text style={styles.ProjectsCounter}>Projetos: 5</Text>
        <Text style={styles.AtividadesCounter}>Atividades: 13</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        <View style={styles.ItemList}>
        <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomText}>
        <DrawerItem
          label="Share"
          onPress={() => {
            // Lógica para compartilhar
          }}
          icon={({ color, size }) => (
            <Text style={{ color, fontSize: size }}></Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 50,
    paddingLeft:20,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    backgroundColor:'#4B5F83'
  },
  UserImage:{
    padding:30,
    height:20,
    width:20,

  },

  userName: {
    color: "#fff",
    fontSize: 25,
    fontSize:18,
  },
  userMail:{
fontSize:18,
color:'#fff'

  },

  Counter:{
    flexDirection:'row',
    paddingTop:10,
    justifyContent:'space-around',
    alignItems:'start'
 
  },
  ProjectsCounter:{
    color:'#fff',
    fontSize:15
  },
  AtividadesCounter:{
    color:'#fff'
  },

  ItemList:{


  },
  drawerContent: {
    flex: 1,
  },
  bottomText: {
    padding: 16,
    borderTopColor: "#fff",
    borderTopWidth: 1,
  },
});

export default DrawerStyle;
