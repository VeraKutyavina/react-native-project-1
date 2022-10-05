import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserItem from "./UserItem";

const user2 = require('../../assets/user2.jpeg');
const user3 = require('../../assets/user3.png');

const UserList = () => {
  const users = [
    {
      name: 'Some name',
      date: '20 Oct 07:25 am',
      type: 'Call',
      photo: user3,
    },
    {
      name: 'User name',
      date: '20 Oct 07:25 am',
      type: 'Video',
      photo: user2,
    },
    {
      name: 'John Doe',
      date: '20 Jen 07:25 am',
      type: 'Call',
      photo: user3,
    }
  ] as const;

  return(
    <View>
      <ScrollView
        scrollEventThrottle={16}
      >
        {users.map(({ name, date, photo, type }, i) =>
          <UserItem key={i} name={name}  date={date} type={type} photo={photo}/>
        )}
      </ScrollView>
    </View>
  )
}

export default UserList;