import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return(
    <View style={styles.container}>
      <Button
        title="Users List"
        onPress={() => navigation.navigate('UserList')}
      />
      <Button
        title="About us"
        onPress={() => navigation.navigate('AboutUs')}
      />
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