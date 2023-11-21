import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Drawer from "./screens/Drawer";
import Login from "./screens/Login";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
export default function App() {
  return (
    <NavigationContainer initialRouteName="Login">
      
   
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={Drawer} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
