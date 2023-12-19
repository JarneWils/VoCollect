import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';

//Navigatie//
const Stack = createNativeStackNavigator();

//Cart-pagina//
export default function AudioPlayer() {

  //Audio laten functioneren//
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  async function playSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    } else {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audio/Sjik-doen.mp3')
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


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
    <View style={styles.audioContainer}>
        <TouchableOpacity onPress={playSound} style={styles.playButton}>
        <Text>{isPlaying ? <Ionicons name="pau-outline" size={30} color="#7026ED"/> : <Ionicons name="play-outline" size={30} color="#7026ED"/> }</Text>
        </TouchableOpacity>
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
  audioContainer: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  playButton: {
    width: 60,
    height: 60,
    paddingTop: 8,
    paddingLeft: 12,
  },
});