import React from 'react';
import {View, Text, Image, ImageURISource, StyleSheet} from 'react-native';

const camera = require('../../assets/camera.jpg');
const phone = require('../../assets/phone.jpg');

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

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderColor: '#CCCCCC',
    borderBottomWidth: 1,
    paddingRight: 24,
  },
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    fontSize: 14,
    fontColor: '#B6B6B6',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  phoneIcon: {
    height: 28,
    width: 28,
  },
  cameraIcon: {
    height: 28,
    width: 30,
  },
});

export default UserItem;