import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export type TTask = {
  title: string;
  checked: boolean;
}

export type TItemsList = {
  todos: TTask[];
  removeTodo: (item: string) => void;
  checkTodo: (item: string) => void;
  navigation: any;
}

const ItemsList = ({ todos, removeTodo, checkTodo, navigation }: TItemsList) => {
  return(
    <FlatList
      data={todos}
      keyExtractor ={(_, index) => index.toString()}
      renderItem={({ item }) =>
        <View style={styles.itemWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('TaskPage', { itemId: todos.indexOf(item) })}>
            <Text style={{ flex: 3, textDecorationLine: item.checked ? 'line-through' : 'none'}}>{item.title}</Text>
          </TouchableOpacity>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => checkTodo(item.title)}>
                <AntDesign name="check" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => removeTodo(item.title)}>
                <AntDesign name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>}
    />
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#2287eb',
    marginTop: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  iconsWrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  }
});

export default ItemsList;