import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Drawer from "./screens/Drawer";
import Login from "./screens/Login";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



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
