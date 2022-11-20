import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const NavigateButtons = ({ navigation }: any) => {
  return(
    <View style={styles.buttonsWrapper}>
      <Button
        title="< Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Home Page"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="About Us"
        onPress={() => navigation.navigate('AboutUs')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default NavigateButtons;