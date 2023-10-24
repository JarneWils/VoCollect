import Home from './screens/Home';
import Cart from './screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

