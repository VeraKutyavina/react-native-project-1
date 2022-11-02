import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

type TTodoForm = {
  text: string;
  setText: (text: string) => void;
  addNewTodo: () => void;
}

const TodoForm = ({ addNewTodo, setText, text }: TTodoForm) => {
  return(
    <View style={styles.searchForm}>
      <TextInput style={styles.inputStyles} onChangeText ={setText} value={text} />
      <Button title="ADD" onPress={addNewTodo} />
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