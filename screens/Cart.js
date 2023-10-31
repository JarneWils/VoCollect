import Profile from './Profile';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

//Navigatie//
const Stack = createNativeStackNavigator();

//Cart-pagina//
export default function Cart() {

  //Hier laad ik mijn font in//
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  if (!fontsLoaded && !fontError) { return null;}

  //De Inhoud van de pagina//
  return (
  <View style={styles.container}>
  <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({

//Styles van de pagina//
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});