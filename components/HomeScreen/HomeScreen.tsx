import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Users List</Text>
      <Text>About us</Text>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;