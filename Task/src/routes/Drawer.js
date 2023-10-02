import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import NovaAtividade from '../screens/NovaAtividade';
import Atividades from '../screens/Atividades';
import Projetos from '../screens/Projetos';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Projetos" component={Projetos} />
      <Drawer.Screen name="Atividades" component={Atividades} />
      <Drawer.Screen name="Nova Atividade" component={NovaAtividade} />
    </Drawer.Navigator>
  );
}