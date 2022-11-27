import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import TodoStore from '../../store/todo'

const TodoForm = () => {
  const [text, setText] = useState<string>('');
  const onSubmit = () => {
    TodoStore.createTodo({
      id: Date.now().toString(),
      completed: false,
      title: text
    })
    setText('');
  }

  return(
    <View style={styles.searchForm}>
      <TextInput style={styles.inputStyles} onChangeText ={setText} value={text} />
      <Button title="ADD" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: '#2287eb',
    borderRadius: 3,
    width: '75%',
    marginRight: 8,
    paddingHorizontal: 12,
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: "center",
  },
});

export default TodoForm;