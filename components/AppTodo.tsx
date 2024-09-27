import React, { useState } from 'react'
import { View, Text, Button, ScrollView, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import { observer } from 'mobx-react-lite'
import uuid from 'react-native-uuid'
import TodoStore from '../store/todo'

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const AppTodo = observer(() => {
  // создаем хух состояния для инпута
  const [text, setText] = useState('')
  return (
    <ScrollView>
      {/* Создаем поле для ввода текста задачи */}
    <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 1, marginTop:48 }} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text} />
  {/* Создаем кнопку создания задачи и на onPress вешаем функцию создания задачи в сторе Mobx */}
  <Button title="Add Todo" onPress={() => TodoStore.createTodo({ id: uuid.v4().toString(), title: text, completed: false })} />
  {/* Создаем список задач, где получаем их из стора Mobx */}
  {TodoStore.todos.map(({ id, title, completed }) => (
    <View
      style={{
    flexDirection: 'row',
      width: 350,
      justifyContent: 'space-between',
      alignItems: 'center'
  }}
    key={id}
      >
      {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
      <Checkbox value={completed} onValueChange={() => TodoStore.completeTodo(id)} />
  <Text>{title}</Text>
    {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
    <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
  </View>
  ))}
  </ScrollView>
)
})

export default AppTodo