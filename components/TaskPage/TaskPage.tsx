import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TTask } from '../ItemsList/ItemsList';

export type TTaskPage = {
  todos: TTask[];
  removeTodo: (item: string) => void;
  checkTodo: (item: string) => void;
  navigation: any;
  route: any;
}

const TaskPage = ({ removeTodo, checkTodo, todos, navigation, route }: TTaskPage) => {
  const { itemId } = route.params;
  const todo = todos[itemId];

  const onRemove = () => {
    removeTodo(todo.title);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.title, textDecorationLine: todo.checked ? 'line-through' : 'underline'}}> {todo.title} </Text>
      <View>
        <Button title="Удалить" onPress={onRemove} />
        <Button title="Сделано" onPress={() => checkTodo(todo.title)} />
        <Button title="Вернуться назад" onPress={() => navigation.goBack()} />
      </View>
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
    width: '100%',
    color: '#2287eb',
    textAlign: 'center',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
});

export default TaskPage;