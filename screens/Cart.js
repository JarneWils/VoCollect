import Profile from './Profile';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Audio } from 'expo-av';
import AudioPlayer from '../components/AudioPlayer';

//Navigatie//
const Stack = createNativeStackNavigator();

//Cart-pagina//
export default function Cart() {



  //Font linladen//
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  if (!fontsLoaded && !fontError) { return null;}


  //De Inhoud van de pagina//
  return (
  <View style={styles.container}>
    <View style={styles.audio}>
      <AudioPlayer/>
    </View>
  <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({

//Styles van de pagina//
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  audio: {
    height: 350,
    width: 425,
    backgroundColor: '#fff',
  }
});