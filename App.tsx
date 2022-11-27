import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './components/TodoList';
import TaskPage from './components/TaskPage';
import DoneTasks from './components/DoneTasks';
import TodoStore from './store/todo'

const Stack = createNativeStackNavigator();

const AppTodo = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <TodoList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DoneTasks">
          {props => <DoneTasks {...props} todos={TodoStore.todos.filter(({ completed }) => completed)} />}
        </Stack.Screen>
        <Stack.Screen name="TaskPage">
          {props => <TaskPage {...props} />}
        </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
})

export default AppTodo;


