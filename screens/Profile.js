import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, ScrollView} from 'react-native';
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
      
      <Image style={styles.profielFoto} source={require('../assets/Damp.jpg')} />

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


      <ScrollView>
        <View style={styles.postContainer}>
          
          <View style={styles.post}>
            <View style={styles.addPostButton}>
              <TouchableOpacity style={styles.addPost} onPress={handleButtonPress}>
                <View style={styles.addPostIcon}></View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

          <View style={styles.post}>
            <View style={styles.postImage}></View>
            <Text style={styles.postViews}>1.6K</Text>
          </View>

        </View>
      </ScrollView>   
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
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'relative',
    top: 40,
  },
  gebruikersNaam: {
    color: '#4F4F4F',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    position: 'relative',
    top: 45,
  },
  bio: {
    width: 180,
    color: '#999999',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    textAlign: 'center',
    position: 'relative',
    top: 45,
  },
  editProfile: {
    width: 100,
    height: 20,
    borderRadius: 100,
    backgroundColor: '#E85E79',
    position: 'relative',
    top: 55,
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
    marginBottom: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    position: 'relative',
    top: 90,
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 21,
  },
  categoryButtons: {
    width: 100,
  },


  postContainer: {
    width: 425,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    top: 0,
  },
  post: {
    width: 125,
    height: 125,
    marginTop: 12,
    marginLeft: 12,
    borderRadius: 15,
    backgroundColor: '#999999',
    position: 'relative',
  },
  addPostButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPostIcon: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: '#7026ED',
    borderRadius: 15,
    position: 'relative',
    top: 38,
  }
});