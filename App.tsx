import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleScreen from './Screens/TitleScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { useState } from 'react';
import MainScreen from './Screens/MainScreen/MainScreen';

export default function App() {
  const [login , setLogin]=useState(true)
  return (
    <View style={styles.container}>
      {login&&<LoginScreen onlogin={setLogin}/>}
      {!login && <MainScreen/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
