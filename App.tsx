import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from "./components/TodoList";
import TaskPage from "./components/TaskPage";
import {TTask} from "./components/ItemsList/ItemsList";
import DoneTasks from "./components/DoneTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState<TTask[]>([]);
  const [text, setText] = useState<string>('');

  const addNewTodo = () => {
    setTodos([...todos, { title: text, checked: false }]);
    setText('');
  }

  const removeTodo = (text: string) => {
    setTodos(todos.filter(({ title }) => title !== text));
  }

  const checkTodo = (text: string) => {
    setTodos(todos.map(({ title, checked }) => ({ title, checked: title === text ? !checked : checked })));
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <TodoList {...props} setText={setText} text={text} addNewTodo={addNewTodo} todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />}
        </Stack.Screen>
        <Stack.Screen name="DoneTasks">
          {props => <DoneTasks {...props} todos={todos.filter(({ checked }) => checked)} />}
        </Stack.Screen>
        <Stack.Screen name="TaskPage">
          {props => <TaskPage {...props} todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


