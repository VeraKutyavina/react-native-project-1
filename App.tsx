
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserList from './components/UserList';

export default function App() {
  return (
    <View style={styles.container}>
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 8,
  },
});
