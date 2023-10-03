import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from 'react-native';
import Home from "../screens/Home";
import NovaAtividade from "../screens/NovaAtividade";
import Atividades from "../screens/Atividades";
import Projetos from "../screens/Projetos";
import DrawerStyle from "../styles/DrawerStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <DrawerStyle {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#4B5F83', // Cor de fundo do cabeçalho
      },
      headerTintColor: '#D9D9D9', // Cor do texto do cabeçalho
      headerTitleStyle: {
        fontWeight: 'bold', // Estilo do texto do cabeçalho
      },
    }}
  >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Projetos"
        component={Projetos}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="folder-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Atividades"
        component={Atividades}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="list-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Nova Atividade"
        component={NovaAtividade}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    marginLeft: -25 // Correção na propriedade marginLeft
  }
});
