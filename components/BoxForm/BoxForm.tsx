import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

type TBox = { width?: number, height?: number, color?: string };
const defaultBox = [
  {
    color: 'red',
  },
  {
    color: 'blue',
  },
]

const BoxForm = () => {
  const [height, setHeight] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [boxArray, setBoxArray] = useState<TBox[]>(defaultBox);

  const onSubmit = () => {
    const newBox = {
      height: height ? Number.parseInt(height) : undefined,
      width:  width ? Number.parseInt(width) : undefined,
      color: color ? color.toLocaleLowerCase() : undefined,
    };
    setBoxArray([...boxArray, newBox])
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center'}} >
      {boxArray.map(({ color, width, height }, i) =>
        <Box key={i} height={height} width={width} color={color} />
      )}

      <View style={styles.form}>
        <TextInput placeholder="width" style={styles.inputStyles} onChangeText={setWidth} />
        <TextInput placeholder="height" style={styles.inputStyles} onChangeText={setHeight} />
        <TextInput placeholder="color" style={styles.inputStyles} onChangeText={setColor} />
      </View>
      <Button onPress={onSubmit} title="Add" />
    </View>
  );
}

export default BoxForm;

export const Box = ({ width = 100, height = 100, color = 'red' }: TBox) => (
  <View style={{ width: width, height: height, backgroundColor: color}} />
);

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: '#2287eb',
    borderRadius: 3,
    marginRight: 8,
    marginTop: 16,
    paddingHorizontal: 12,
    width: 100,
  },
  text: {
    marginTop: 16,
    color: 'red',
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',

  }
});