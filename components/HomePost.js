import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';

//Profiel-pagina//
export default function HomePost() {

    //Edit Profile button//
    const handleButtonPress = () => {
    alert('Nog geen functie');
    }

    //Fonts inladen//
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_600SemiBold,
    });
    if (!fontsLoaded && !fontError) { return null;}

    //De Inhoud van de pagina//
    return (
        <View style={styles.container}>
           <View style={styles.postContainer}>
                <View style={styles.profielContainer}>
                    <Image style={styles.profielFoto} source={require('../assets/Damp.jpg')} />
                    <Text style={styles.userName}>Jarne Wils</Text>

                </View>
                <Image style={styles.postFoto} source={require('../assets/Damp.jpg')} />
           </View>
        </View>
    );
}

const styles = StyleSheet.create({

//Styles van de component//
container: {
    width: 425,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 0,
  },
postContainer: {
    width: 425,
    height: 425,
    marginTop: 15,
    backgroundColor: '#fff',
},
postFoto: {
    width: 425,
    height: 425,
},
profielContainer: {
    width: 425,
    height: 60,
    backgroundColor: "#fff",
},
profielFoto: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 50,
},
userName: {
    color: '#4F4F4F',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    position: 'relative',
    top: 45,
},
});