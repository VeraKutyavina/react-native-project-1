import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const user = require('../../assets/jungkook.jpeg');
const phone = require('../../assets/phone.jpg');

const UserCall = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.name}> Mark Johnson </Text>
        <Text style={styles.status}> calling </Text>
      </View>
      <Image style={styles.avatar} source={user} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <View style={styles.imgWrapper}>
            <Image source={phone} style={styles.button} />
          </View>
          <View style={styles.imgWrapper}>
            <Image source={phone} style={styles.button} />
          </View>
          <View style={styles.imgWrapper}>
            <Image source={phone} style={styles.button} />
          </View>
        </View>
      </View>
    </View>
  )
};

export default UserCall;