import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Buttons from './components/Buttons';
import CustomInput from './components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Buttons />
      <CustomInput />
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
