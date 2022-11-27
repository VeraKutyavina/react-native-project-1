import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import ProductStore from '../../store/productStore';
import { styles } from './styled';
const size = ['S', 'M', 'L', 'XL'];
const rating = [1, 2, 3, 4, 5];

type TProductCard = {
  navigation: any;
  route: any;
}

const ProductCard = ({ navigation, route }: TProductCard) => {
  const { itemId } = route.params;
  const product = ProductStore.products[itemId];
  return (
      <View style={styles.container}>
        <Image source={product.photo} style={styles.img} />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> {product.price} руб. </Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.rating}>
          {rating.map(i => <AntDesign name={i <= product.rating ? 'star' : 'staro'} size={28} color="black" />)}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
  )
};

export default ProductCard;