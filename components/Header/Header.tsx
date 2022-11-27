import React from 'react';
import { observer } from 'mobx-react-lite'
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styled';
import CartStore from "../../store/cartStore";

type THeader= {
  navigation: any;
}

const Header = ({ navigation }: THeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> LICHI </Text>
      <View style={styles.iconsWrapper}>
        <AntDesign style={{ paddingRight: 8 }} name='hearto' size={32} color='black' />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <AntDesign style={{ paddingRight: 8 }} name='shoppingcart' size={32} color='black' />
        </TouchableOpacity>
        <View style={styles.productsCount}>
          <Text>{CartStore.cart.length}</Text>
        </View>
      </View>
    </View>
  )
};

export default observer(Header);