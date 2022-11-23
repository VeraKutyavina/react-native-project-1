import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native';

const WelcomeForm = () => {
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = () => {
    if (!password || !login) {
      setError("Fill in all fields please");
      return;
    };
    setIsSubmitting(true);
  };

  return (
    <>
      {isSubmitting ? <Text> Welcome! </Text> : (
        <>
          <Text> Sign In </Text>
          <TextInput placeholder="Login" style={styles.inputStyles} onChangeText={setLogin} />
          <TextInput secureTextEntry={true}  placeholder="Password" style={styles.inputStyles} onChangeText={setPassword} />
          {error && <Text style={styles.text}> {error} </Text>}
          <Button onPress={onSubmit} title="submit" />
        </>
      )}
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
    marginTop: 16,
    paddingHorizontal: 12,
  },
  text: {
    marginTop: 16,
    color: 'red',
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WelcomeForm;