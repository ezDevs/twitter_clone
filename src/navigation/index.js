import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import {Home} from '../screens';
import {Drawer, ProfileHeader} from '../components';

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Página inicial',
      headerLeft: ProfileHeader,
      headerStyle: {height: 44},
    },
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {screen: MainStack, navigationOptions: {title: 'Home'}},
  },
  {
    contentComponent: Drawer,
  },
);

export default createAppContainer(DrawerNavigator);
