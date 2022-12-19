import React from 'react';
import { observer } from 'mobx-react-lite'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WeatherStore from '../../store/weather'

export type TTask = {
  title: string;
  checked: boolean;
}

export type TItemsList = {
  navigation: any;
}

const ItemsList =({ navigation }: TItemsList) => {
  return(
    <FlatList
      data={WeatherStore.cities}
      keyExtractor ={(_, index) => index.toString()}
      renderScrollComponent={() => (
        <View style={styles.items} />
      )}
      renderItem={({ item }) =>
        <View style={styles.itemWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('CityPage', { itemId: item.id })}>
          <Text style={styles.text}> {item.name} </Text>
          </TouchableOpacity>
        </View>}
    />
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#2287eb',
    backgroundColor: '#2287eb',
    color: 'white',
    marginTop: 12,
    padding: 12,
    alignContent: "center",
    alignItems: "center",
    minWidth: '45%',
  },
  text: { color: 'white', fontWeight: 'bold' },
  items: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});

export default observer(ItemsList);