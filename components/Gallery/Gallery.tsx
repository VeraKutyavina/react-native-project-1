import React from 'react';
import {Image, View} from "react-native";
import {styles} from "./styles";

const img1 = require('../../assets/kermit.png');
const img2 = require('../../assets/kiko.jpeg');
const img3 = require('../../assets/jungkook.jpeg');
const img4 = require('../../assets/img.jpeg');

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const Gallery = () => {
  return (
    <View style={styles.container}>
      {images.map(img => <Image style={styles.img} source={img} />)}
    </View>
  )
};

export default Gallery;