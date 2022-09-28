import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
const image = require('./back.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/*<View style={styles.top}>*/}

      {/*</View>*/}
      <ImageBackground source={image} resizeMode="cover" style={styles.top} />
      <View style={styles.content}>
        <Text style={styles.title}>Kermit page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  top: {
    backgroundColor: "black",
    height: 112,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  content: {
    padding: 32,
  }
});
