import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const users = [
  "Test Test",
  "Vera Kutyavina",
  "Jeon Jungkook",
  "Park Jimin",
]

const UsersListScreen = () => {
  return(
    <View style={styles.container}>
      {users.map((user, i) => (
        <Text key={i}>{user}</Text>
      ))
      }
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


export default UsersListScreen;