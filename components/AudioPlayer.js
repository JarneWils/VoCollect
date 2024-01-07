import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';

// Navigatie //
const Stack = createNativeStackNavigator();

// Cart-pagina //
export default function AudioPlayer() {
  // Audio laten functioneren //
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0); // Nieuwe state voor de afspeelduur
  const [position, setPosition] = React.useState(0); // Nieuwe state voor de huidige positie

  async function playSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
      setDuration(0);
      setPosition(0);
    } else {
      console.log('Loading Sound');
      const { sound, status } = await Audio.Sound.createAsync(
        require('../assets/audio/Sjik-doen.mp3')
      );
      setSound(sound);
      setDuration(status.durationMillis || 0);

      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  React.useEffect(() => {
    let isMounted = true;
  
    const updatePosition = async () => {
      if (isMounted && sound) {
        const status = await sound.getStatusAsync();
        setPosition(status.positionMillis || 0);
      }
    };
  
    const interval = setInterval(updatePosition, 1000);
  
    return () => {
      isMounted = false;
      clearInterval(interval);
  
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  // De inhoud van de pagina //
  return (
    <View style={styles.container}>
      <View style={styles.audioContainer}>
        <TouchableOpacity onPress={playSound} style={styles.playButton}>
          <Text>
            {isPlaying ? (
              <Ionicons name="pause-outline" size={30} color="#7026ED" />
            ) : (
              <Ionicons name="play-outline" size={30} color="#7026ED" />
            )}
          </Text>
        </TouchableOpacity>
        <Text style={styles.durationText}>
          {`${Math.floor(position / 1000)}`} / {`${Math.floor(duration / 1000 - position /1000)}s`}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles van de pagina //
  audioContainer: {
    flexDirection: 'row',
    width: 300,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 60,
    height: 60,
    paddingTop: 12,
    marginLeft: -10,
  },
  durationText: {
    marginLeft: -20,
    fontSize: 18,
    color: '#888',
    justifyContent:'center',
  },
  timeline: {
    width: 180,
    height: 2,
    backgroundColor: '#000',
    justifyContent:'center',
  },
});
