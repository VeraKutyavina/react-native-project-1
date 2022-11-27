import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styled';
import ProductStore from "../../store/productStore";

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
      </View>
    </View>
  )
};

export default Header;