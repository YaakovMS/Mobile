import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  );
}
export default MyStack