import React from 'react';
import { observer } from 'mobx-react-lite'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoStore from '../../store/todo'

export type TTaskPage = {
  navigation: any;
  route: any;
}

const TaskPage = ({ navigation, route }: TTaskPage) => {
  const { itemId } = route.params;
  const todo = TodoStore.todos[itemId];


  const onRemove = () => {
    TodoStore.deleteTodo(todo.id);
    navigation.goBack();
  }
 
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, textDecorationLine: todo.completed ? 'line-through' : 'underline'}}> {todo.title} </Text>
      <View>
        <Button title="Удалить" onPress={onRemove} />
        <Button title="Сделано" onPress={() => TodoStore.completeTodo(todo.id)} />
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

export default observer(TaskPage);