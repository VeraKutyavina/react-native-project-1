import React, {useMemo} from 'react';
import { observer } from 'mobx-react-lite'
import {View, Text, Image, ScrollView} from "react-native";
import CartStore from '../../store/cartStore';
import {styles} from "./styled";

type TCart = {
  navigation: any;
  route: any;
}

const Cart = ({}: TCart) => {
  const products = CartStore.cart
  const totalPrice = useMemo(() => products.reduce(
    (obj, item, i) => obj + (item.price * item.inCart),
    0,
  ), [products]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id, inCart }) => (
            <View key={id} style={styles.productWrapper}>
              <View style={styles.nameWrapper}>
                {/*@ts-ignore*/}
                <Image style={styles.img} source={photo} />
                <View>
                  <Text style={styles.name}> {name} </Text>
                  <Text style={styles.name}> {inCart} шт. </Text>
                </View>
              </View>
              <Text style={styles.price}> {inCart * price} руб. </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.totalPrice}>
        Total price: <Text style={styles.totalPriceNumber}> {totalPrice} руб. </Text>
      </Text>
    </>
  )
};

export default observer(Cart);