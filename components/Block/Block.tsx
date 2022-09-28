import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image, ImageSourcePropType
} from "react-native";

type TBlock = {
  subtitle: string;
  img: ImageSourcePropType;
}

const Block = ({ subtitle, img }: TBlock) => {
  return(
    <View style={styles.wrapper}>
      <View>
        <Image source={img} style={styles.img} />
      </View>
      <Text style={styles.text}>{subtitle}</Text>
    </View>
  )
}

export default Block;

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  img: {
    width: 130,
    height: 60,
    resizeMode: 'contain'
  },
  text: {
    marginTop: 8,
    textAlign: 'center'
  }
});