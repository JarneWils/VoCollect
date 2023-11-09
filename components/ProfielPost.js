import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

//Profiel-pagina//
export default function ProfielPost() {

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
    );
}

const styles = StyleSheet.create({

//Styles van de component//
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
    borderWidth: 4,
    borderColor: '#7026ED',
    borderRadius: 15,
    position: 'relative',
    top: 36,
  },
  postViews: {
    fontFamily: 'Inter_600SemiBold',
    color: '#9f9f9f',
    position: 'relative',
    top: 95,
    left: 15,
  }
});