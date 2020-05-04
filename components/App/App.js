import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../Home/Home';
import Loading from '../Loading/Loading';
import SignIn from './Signin/Signin';
import SignOut from './SignOut/SignOut';
import {enableScreens} from 'react-native-screens';

enableScreens();

const appDrawer = createDrawerNavigator(
  {
    Home: Home,
    SignOut: SignOut,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      drawer: appDrawer,
      login: SignIn,
      logout: SignOut,
      app: Home,
      loading: Loading,
    },
    {
      initialRouteName: 'login',
    },
  ),
);

export default App;
