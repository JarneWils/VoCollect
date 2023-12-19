import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';

//Profiel-pagina//
export default function ProfielPost() {

    //Edit Profile button//
    const handleButtonPress = () => {
    alert('nog geen functie');
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
        <View style={styles.postContainer}>
            
            <View style={styles.post}>
                <View style={styles.addPostButton}>
                <TouchableOpacity style={styles.addPost} onPress={handleButtonPress}>
                    <Ionicons 
                        name="add-circle-outline" 
                        size={45}
                        color="#7026ED"
                        style={styles.addPostIcon}/>
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
    );
}

const styles = StyleSheet.create({

//Styles van de component//
postContainer: {
    width: 425,
    backgroundColor: '#F5F5F5',
    paddingBottom: 15,
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
    backgroundColor: '#fff',
    borderRadius: 20,
    position: 'relative',
  },
  addPostButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPostIcon: {
    width: 50,
    height: 50,
    position: 'relative',
    top: 38,
  },
  postViews: {
    fontFamily: 'Inter_600SemiBold',
    color: '#9f9f9f',
    position: 'relative',
    top: 95,
    left: 15,
  }
});