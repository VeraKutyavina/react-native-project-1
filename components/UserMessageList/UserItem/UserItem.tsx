import React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import { styles } from './styles';

type UserItemType = {
  text: string;
  photo: ImageURISource;
}

const UserItem = ({ text, photo }: UserItemType) => {
  return(
    <View style={styles.wrapper}>
      <View style={styles.userWrapper}>
        <Image style={styles.img} source={photo} />
        <Text style={styles.text}> {text} </Text>
      </View>
    </View>
  )
}

export default UserItem;