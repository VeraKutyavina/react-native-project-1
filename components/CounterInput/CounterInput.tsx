import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type CounterInputType = {
  fontSize: number
};

const CounterInput = ({ fontSize }: CounterInputType) => {
  const [value, setValue] = useState(0);

  const increaseValue = () => setValue(value + 1);
  const decreaseValue = () => setValue(value - 1);

  return(
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={{...styles.value, fontSize: fontSize}}> {value} </Text>
      <TouchableOpacity onPress={decreaseValue}>
        <Text style={styles.button}>—</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    fontSize: 18,
    color: '#4e87fd',
    borderColor: '#4e87fd',
    borderWidth: 1,
    padding: 8,
    width: 48,
    display: 'flex',
    textAlign: 'center',
  },
  value: {
    marginHorizontal: 16,
  }
});

export default CounterInput;
