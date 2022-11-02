import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ItemsList from '../ItemsList';
import TodoForm from '../TodoForm';
import { TTask } from '../ItemsList/ItemsList';

export type TTodoList = {
  todos: TTask[];
  removeTodo: (item: string) => void;
  checkTodo: (item: string) => void;
  navigation: any;
  addNewTodo: () => void;
  text: string;
  setText: any;
}

const TodoList = ({ removeTodo, checkTodo, todos, navigation, setText, text, addNewTodo }: TTodoList) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Todo List </Text>
      <ItemsList navigation={navigation} checkTodo={checkTodo} removeTodo={removeTodo} todos={todos} />
      <TouchableOpacity onPress={() => navigation.navigate('DoneTasks')}>
        <Text> Перейти к выполненным </Text>
      </TouchableOpacity>
      <TodoForm addNewTodo={addNewTodo} setText={setText} text={text} />
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