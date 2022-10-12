import React from 'react';
import {Image, View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const tShirt = require('../../assets/t-shirt.jpeg');
const star = require('../../assets/star.png');

const colors = ['#e87ec2', '#5e42e8', '#3eb5d9', '#b59bdc', '#2b856c', '#e7be26'];
const size = ['S', 'M', 'L', 'XL'];

const ProductCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={tShirt} style={styles.img} />
        <Text style={styles.title}> Super Soft T-shirt </Text>
        <Text style={styles.price}> 12.22$ </Text>
        <Text style={styles.description}> Sharks Beauty T-shirt Men Comics Poster Design T Shirt Hip Hop Street Tops Cotton Black Tees Sexy Mermaid Print Clothes Unique</Text>
        <View style={styles.rating}>
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
          <Image style={styles.star} source={star} />
        </View>
        <View style={styles.variantsWrapper}>
          {colors.map(color => <View style={{ ...styles.color, backgroundColor: color }} />)}
        </View>
        <View style={styles.variantsWrapper}>
          {size.map(s => (
            <View style={styles.size}>
              <Text> {s} </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

export default ProductCard;