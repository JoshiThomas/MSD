import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import SignedIn from "./src/screens/SignedIn";
import ScanProduct from "./src/screens/ScanProduct";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import config from "./config";

const navigator = createStackNavigator(
  {
    Home: Home,
    SignedIn: SignedIn,
    SignIn: SignIn,
    ScanProduct: ScanProduct,
    List: ListScreen,
    Images: ImageScreen,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(navigator);