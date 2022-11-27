import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ItemsList from '../ItemsList';
import TodoForm from '../TodoForm';

export type TTodoList = {
  navigation: any;
}

const TodoList = ({ navigation }: TTodoList) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Todo List </Text>
      <ItemsList navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.navigate('DoneTasks')}>
        <Text> Перейти к выполненным </Text>
      </TouchableOpacity>
      <TodoForm />
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

export default TodoList;