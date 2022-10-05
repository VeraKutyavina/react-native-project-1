import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import UserItem from "./UserItem";

const user1 = require('../../assets/user1.jpeg');

const UserMessageList = () => {
  const users = [
    {
      text: "Xcode includes everything developers need to create great applications.",
      photo: user1,
    },
    {
      text: "Xcode includes everything developers need to create great applications.",
      photo: user1,
    },
    {
      text: "Xcode includes everything developers need to create great applications.",
      photo: user1,
    }
  ] as const;

  return(
    <View>
      <ScrollView
        scrollEventThrottle={16}
      >
        {users.map(({ text, photo }, i) =>
          <UserItem key={i} text={text} photo={photo}/>
        )}
      </ScrollView>
    </View>
  )
}

export default UserMessageList;