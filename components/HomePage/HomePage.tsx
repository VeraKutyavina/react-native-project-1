import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemsList from '../ItemsList';

export type THomePage = {
  navigation: any;
}

const HomePage = ({ navigation }: THomePage) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Weather </Text>
      <ItemsList navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    width: '100%',
    color: '#2287eb',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default HomePage;