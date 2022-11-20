import React, {useState} from 'react';
import {Button, Text, TextInput, StyleSheet} from "react-native";

const CustomInput = () => {
  const [value, setValue] = useState<string>("");
  const [submitValue, setSubmitValue] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("");

  const onSubmit = () => setSubmitValue(currentValue);

  return (
    <>
      <Text style={styles.text}> {value} </Text>
      <TextInput style={styles.inputStyles} onChangeText={setValue} />

      <Text style={styles.text}> {submitValue} </Text>
      <TextInput style={styles.inputStyles} onChangeText={setCurrentValue} />
      <Button onPress={onSubmit} title="submit" />
    </>
  )
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    height: 40,
    borderColor: '#2287eb',
    borderRadius: 3,
    width: '75%',
    marginRight: 8,
    paddingHorizontal: 12,
  },
  text: {
    marginVertical: 16,
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: "center",
  },
});

export default CustomInput;