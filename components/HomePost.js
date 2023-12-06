import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView,} from 'react-native';
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


    //AUDIO//


    //De Inhoud van de pagina//
    //<Image style={styles.postFoto} source={require('../assets/Damp.jpg')} />
    return (
        <ScrollView>            
        <View style={styles.container}>
            <View style={styles.profielContainer}>
                <Image style={styles.profielFoto} source={require('../assets/Damp.jpg')} />
                <Text style={styles.TitleName}>Jarne</Text>
                <Text style={styles.SongTitle}>Prachtige stem die je zeker wilt kopen</Text>
                <View style={styles.iconContainer}>
                  <Text style={styles.like}><Ionicons name="heart-outline" size={25} color="#7026ED"/></Text>
                  <Text style={styles.download}><Ionicons name="download-outline" size={25} color="#7026ED"/></Text>
                </View>
            </View>
        </View>
        <View style={styles.audiContainer}>
        </View>
        <View style={styles.shadow}>
        </View>
        
        </ScrollView>
    );
}



const styles = StyleSheet.create({

//Styles van de component//
container: {
    width: 425,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    paddingBottom: 15,
},
profielContainer: {
    flexDirection: 'row',
    width: 425,
    height: 120,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 4,
},
profielFoto: {
    marginTop: -40,
    width: 110,
    height: 110,
    borderRadius: 100,
    position: 'relative',
    left: 20,
},
titelContainer:{
    width: 425,
    height: 100,
    backgroundColor: '#F5F5F5',
    position: 'relative',
    left: 200,
},

TitleName:{
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 35,
    marginTop: -35,
    fontSize: 20,
},
SongTitle:{
    marginLeft: -50,
    marginTop: 10,
    fontSize: 15,
},
iconContainer:{
    flexDirection: 'row',
    position: 'relative',
    left: -80,
},
like:{
    top: 80,
    paddingLeft: 15,
},
download:{
    top: 77,
    paddingLeft: 15,
},
});
