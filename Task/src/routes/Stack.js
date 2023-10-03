import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Header from "../components/Header";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerShown={false}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        headerShown={false}
        options={{
          headerTitle: () => <Header name="Home" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
