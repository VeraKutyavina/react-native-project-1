import React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import { styles } from "./styles";

const camera = require('../../../assets/camera.jpg');
const phone = require('../../../assets/phone.jpg');

export enum callType {
  call = 'Call',
  video = 'Video'
}

type UserItemType = {
  name: string;
  date: string;
  type: `${callType}`;
  photo: ImageURISource;
}

const UserItem = ({ name, date, type, photo }: UserItemType) => {
  return(
    <View style={styles.wrapper}>
      <View style={styles.userWrapper}>
        <Image style={styles.img} source={photo} />
        <View>
          <Text style={styles.userName}> {name} </Text>
          <Text style={styles.time}> {date} </Text>
        </View>
      </View>
      {type === 'Call' && <Image style={styles.phoneIcon} source={phone} />}
      {type === 'Video' && <Image style={styles.cameraIcon} source={camera} />}
    </View>
  )
}

export default UserItem;