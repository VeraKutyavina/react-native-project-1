import React from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';

type TCard = {
  text: string;
  onClick: (num: string) => void;
  action?: string;
}

const Card = ({ text, onClick }: TCard) => {
  return (
    <TouchableOpacity onPress={() => onClick(text)}>
      <View style={styles.square}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default Card;