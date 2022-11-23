import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Buttons from './components/Buttons';
import CustomInput from './components/Input';
import WelcomeForm from "./components/WelcomeForm";
import BoxForm from "./components/BoxForm";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Buttons />*/}
      {/*<CustomInput />*/}
      {/*<WelcomeForm />*/}
      <BoxForm />
      <StatusBar style="auto" />
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
