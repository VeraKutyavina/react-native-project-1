import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
const user1 = require('../../assets/user3.png');

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image style={styles.avatar} source={user1} />
        <Text style={styles.name}> John Doe </Text>
      </View>
    </View>
  )
};

export default UserProfile;