import { StyleSheet, Text, View } from 'react-native';
import CounterInput from "./components/CounterInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Simple counter</Text>
      <CounterInput fontSize={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
