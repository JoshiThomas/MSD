import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import SignedIn from "./src/screens/SignedIn";
import ScanProduct from "./src/screens/ScanProduct";

import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareColorScreen from "./src/screens/SquareColorScreen";
import TextScreen from "./src/screens/TextScreen";
import config from "./config";

const navigator = createStackNavigator(
  {
    HoHomeScreenme: HomeScreen,
    Home: {
      screen: Home,
      title: 'Welcome'
    },
    SignedIn:
    {
      screen: SignedIn,
      title: 'Welcome'
    },
    SignIn: SignIn,
    ScanProduct: ScanProduct,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    SquareColor: SquareColorScreen,
    TextScreen: TextScreen,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(navigator);