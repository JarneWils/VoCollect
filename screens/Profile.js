import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

//Navigatie//
const Stack = createNativeStackNavigator();

//Profiel-pagina//
export default function Profile({navigation}) {

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

      <View style={styles.profielFoto}></View>

      <Text style={styles.gebruikersNaam}>Jarne Wils</Text>

      <Text style={styles.bio}>Without music, life would be a mistake.</Text>

      <TouchableOpacity style={styles.editProfile} onPress={handleButtonPress}>
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>

      <View style={styles.followersContainer}>
        <View style={styles.followersInfo}>
          <Text style={styles.followersNumber}>938</Text>
          <Text style={styles.followersTitle}>Followers</Text>
        </View>
        <View style={styles.followersInfo}>
          <Text style={styles.followersNumber}>340</Text>
          <Text style={styles.followersTitle}>Following</Text>
        </View>
        <View style={styles.followersInfo}>
          <Text style={styles.followersNumber}>3.4K</Text>
          <Text style={styles.followersTitle}>Likes</Text>
        </View>
      </View>

      <View style={styles.categoryContainer}>
      <TouchableOpacity style={styles.categoryButtons} onPress={handleButtonPress}>
        <Text style={styles.editProfileText}>MIC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButtons} onPress={handleButtonPress}>
        <Text style={styles.editProfileText}>HEART</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButtons} onPress={handleButtonPress}>
        <Text style={styles.editProfileText}>DOLLAR</Text>
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
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profielFoto: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: '#fff',
    position: 'relative', 
    top: -190,
  },
  gebruikersNaam: {
    color: '#4F4F4F',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    position: 'relative',
    top: -170,
  },
  bio: {
    width: 180,
    color: '#999999',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    textAlign: 'center',
    position: 'relative',
    top: -170,
  },
  editProfile: {
    width: 100,
    height: 20,
    borderRadius: 100,
    backgroundColor: '#E85E79',
    position: 'relative',
    top: -150,
  },
  editProfileText: {
    color: '#F5F5F5',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    textAlign: 'center',
  },


  followersContainer: {
    width: 200,
    height: 100,
    flexDirection: 'row',
    position: 'relative',
    top: -130,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
  },
  followersInfo: {
    width: 100,
  },
  followersNumber: {
    height: 30,
    color: '#4F4F4F',
    fontFamily: 'Inter_900Black',
    fontSize: 18,
    textAlign: 'center',
  },
  followersTitle: {
    color: '#4F4F4F',
    fontSize: 13,
    textAlign: 'center',
  },


  categoryContainer: {
    flexDirection: 'row',
    width: 425,
    height: 50,
    backgroundColor: '#fff',
    position: 'relative',
    top: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtons: {
    width: 100,

  }
});