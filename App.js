import React, {useState} from 'react';
import Home from './screens/Home';
import Cart from './screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import useData from './data/api';
import LoginScreen from './screens/Login';

const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [iserData, setUserData] = useState(null);

  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
    const {userData} = useData(username, password);
    setUserData(userData);
  };
  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };


  return (
    <NavigationContainer>
  {/* 
     {!isLoggedin ? (
        <LoginScreen onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
      ) : (
  */}
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
    {/* 
      )}
    */}
    </NavigationContainer>
    );
};