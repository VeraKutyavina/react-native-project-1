import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const like = require('../../assets/like.png');

const AcceptedOrder = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.like} source={like} />
      <Text style={styles.title}>Congratulation, your order is accepted</Text>
      <Text style={styles.text}>Doctor Who is a British science-fiction television programme broadcast by the BBC since 1963. The programme depicts the adventures of a Time Lord called the Doctor, an extraterrestrial being who appears to be human.</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default AcceptedOrder;
