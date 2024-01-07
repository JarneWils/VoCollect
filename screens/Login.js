import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin, setIsLoggedIn, setUserData}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://jarneb.vaw.be/vocollect/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ users_username: username, users_password: password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log(data);
        console.log(data.users)


// Export the value

        const sanitizedUserData = sanitizeUserData(data.user_data,); // Remove circular references and include relationships
 // Remove circular references
  
        setIsLoggedIn(true);
        setUserData(sanitizedUserData);

        // ... Other necessary state updates or redirection to logged-in screens
      } else {
        // Handle login failure
        console.error('Login failed:', data.message);
        // ... Handle error state or show an alert to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      // ... Handle error state or show an alert to the user
    }
  };
  
  // Function to sanitize user data and remove circular references
  const sanitizeUserData = (userData) => {

    // Implement logic to remove circular references
    // For example, you might create a sanitized object with only necessary properties
    const sanitizedData = {
      users_id: userData.users_id,
      users_first_name: userData.users_first_name,
      users_last_name: userData.users_last_name,
      users_username: userData.users_username,
      users_password: userData.users_password,
    };
    return sanitizedData;
  };

  
  
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      
      <View style={styles.title}>
      <Text style={styles.h1}>Log in</Text>
      </View>
      
      <TextInput
        style={styles.typeIn}
        placeholder="Username"
        placeholderTextColor="#ADADAD"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.typeIn}
        placeholderTextColor="#ADADAD"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity  style={styles.button} onPress={() => handleLogin(username, password)}>
        <Text style={styles.buttonT}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#4F4F4F",
    textAlign:"center",
  },
  titleName: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#4F4F4F",
    marginTop: 56,
    textAlign:"center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    width: '80%',
  },

  button: {
    width: '80%',
    height: 50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#7026ED",
    borderRadius: 13,
    textAlign:"center",
  },

  buttonT: {
   textAlign: "center",
   fontWeight: "bold",
   color: "#fff",
  },

  typeIn: {
    width: '80%',
    height: 50,
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#DDDDDD",
    borderRadius: 13,
    textAlign:"center",
    fontWeight: "bold",
  },

});


export default LoginScreen;