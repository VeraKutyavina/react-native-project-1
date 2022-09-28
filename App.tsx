import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import Block from "./components/Block";
const image = require('./back.png');
const kermit1 = require('./kermit1.jpeg');
const kermit2 = require('./kermit2.jpeg');
const kermit3 = require('./kermit3.jpeg');

const BlocksData = [
  {
    subtitle: "He was made out of a coat",
    img: kermit1,
  },
  {
    subtitle: "He wasn't originally a frog",
    img: kermit2,
  },
  {
    subtitle: "He wasn't the original star of 'The Muppet Show'",
    img: kermit3,
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.top} />
      <View style={styles.content}>
        <Text style={styles.title}>Kermit page</Text>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View>
            <Text style={styles.blocksTitle}>
              What do you know about Kermit?
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {BlocksData.map(({ subtitle, img }, i) => <Block img={img} subtitle={subtitle} key={i} />)}
            </ScrollView>
          </View>
        </ScrollView>
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
  blockTitle: {
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  blocksTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 20,
  },
  content: {
    padding: 32,
  }
});
