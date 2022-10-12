import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const jk = require('../../assets/jungkook.jpeg');

const Resume = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Lorem ipsum dolor </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
        <Text style={styles.text}>Doctor Who is a British science-fiction television programme broadcast by the BBC since 1963. The programme depicts the adventures of a Time Lord called the Doctor, an extraterrestrial being who appears to be human.</Text>
        <Text style={styles.link}>Doctor Who is a British science-fiction television programme</Text>
        <Text style={styles.date}>2001-12-12 13:03:02 </Text>
        <View style={styles.user}>
          <Image style={styles.avatar} source={jk} />
          <Text style={styles.name}>Johan Doe </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>
            Like
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Resume;