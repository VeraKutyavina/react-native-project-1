import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore';
import CartStore from '../../store/cartStore';
import { styles } from './styled';
import Header from "../Header";
const rating = [1, 2, 3, 4, 5];

type TProductCard = {
  navigation: any;
  route: any;
}

const ProductCard = ({ navigation, route }: TProductCard) => {
  const { itemId } = route.params;
  const product = ProductStore.products[itemId];

  const addToCart = () => {
    ProductStore.addCartCount(product.id)
    CartStore.addToCart(product)
  }

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        {/*@ts-ignore*/}
        <Image source={product.photo} style={styles.img} />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> {product.price} руб. </Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.rating}>
          {rating.map(i => <AntDesign name={i <= product.rating ? 'star' : 'staro'} size={28} color="black" />)}
        </View>
        <TouchableOpacity onPress={addToCart} style={styles.addButton}>
          <Text style={styles.buttonText}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default observer(ProductCard);