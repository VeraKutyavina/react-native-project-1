
import { StyleSheet, View } from 'react-native';
import React from 'react';
import UserList from './components/UserList';
import UserMessageList from "./components/UserMessageList";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<UserList />*/}
      <UserMessageList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 8,
  },
});
