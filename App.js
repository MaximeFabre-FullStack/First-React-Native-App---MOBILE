import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './components/Home/style';
import Loading from './components/App/Loading/Loading';

const App = createAppContainer(
  createSwitchNavigator(
    {
      app: Home,
      loading: Loading,
    },
    {
      initialRouteName: 'loading',
    },
  ),
);

export default App;
