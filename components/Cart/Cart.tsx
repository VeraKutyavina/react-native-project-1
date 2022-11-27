import React from 'react';
import { observer } from 'mobx-react-lite'
import {View, Text, Image} from "react-native";
import CartStore from '../../store/cartStore';
import {styles} from "./styled";

type TCart = {
  navigation: any;
  route: any;
}

const Cart = ({}: TCart) => {
  const products = CartStore.cart
  // @ts-ignore
  return (
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
  )
};

export default observer(Cart);