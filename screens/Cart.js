import Profile from './Profile';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Cart() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{title:'Cart'}}/>
      </Stack.Navigator>
  );
}
