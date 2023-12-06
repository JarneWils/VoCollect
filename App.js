import Home from './screens/Home';
import Cart from './screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
        name= "Home"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
          height: 100,
          backgroundColor: '#fff',
          elevation: 10,
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerStyle: {
          height: 100,
          backgroundColor: '#fff',
          elevation: 10,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerStyle: {
          height: 100,
          backgroundColor: '#fff',
          elevation: 10,
          },
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
};