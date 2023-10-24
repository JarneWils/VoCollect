import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Image } from 'react-native';
import useNetwork from '../data/network';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function Home({ navigation }) {
    const {network, isLoading, isError} = useNetwork();
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_600SemiBold,
    });
    if (isLoading) return <Text>Loading</Text>
    if (isError) return <Text>Error</Text>
    if (!fontsLoaded && !fontError) { return null;}
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{network.stations.name}</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 40,
    fontWeight: 'Inter_900Black',
  }  
});