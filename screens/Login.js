import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput, ImageBackground
} from 'react-native';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleSignIn = () => {
    //logique de login 
    if (username === 'hassini' && password === '1234') {
      // Stocker une valeur dans le Local Storage
      const authentifier = async () => {
        try {
          await AsyncStorage.setItem('maValeur', 'jwt token ');


        }
        catch (error) {
          console.log('erreur lors de authentification', error)
        }
      }
      navigation.navigate("Drawer");
    } else {
      // Gérer une connexion incorrecte ici, par exemple, en affichant un message d'erreur.
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }

  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('./background.jpg')} // Remplacez le chemin par le chemin de votre image
        style={styles.backgrooundcontainer}
      >


        <View style={styles.container}>


          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="qwerty@gmail.com"
                placeholderTextColor="#6b7280"
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={[styles.inputControl, { backgroundColor: 'white', width: '100%' }] /* Ajoutez ce style */}
              />
            </View>


            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput 
                autoCorrect={false}
                placeholder="********"
                placeholderTextColor="#6b7280"
                
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={[styles.inputControl, styles.largeInput]}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={handleSignIn}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: 'center', // Pour centrer verticalement
    alignItems: 'center', // Pour centrer horizontalement

  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
    width :' 100%'
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    width :' 100%'
  },
  inputControl: {
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    width: '100%',
   // Vous pouvez ajuster la largeur ici (par exemple, 80%)
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    width :' 70%'
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
    width :' 70%'
  }, backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' pour d'autres options
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de superposition (ici, une superposition sombre)
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' pour ajuster l'image
  }, backgrooundcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Couleur d'arrière-plan de la vue
  },
  largeInput: {
    width: '1000%', // Ajustez la largeur selon vos besoins
  },


});