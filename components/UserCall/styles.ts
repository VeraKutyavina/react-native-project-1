import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#237265',
  },
  topContent: {
    height: 100,
    paddingTop: 32,
    paddingHorizontal: 12,
  },
  avatar: {
    height: 256,
    width: '100%',
  },
  name: {
    color: 'white',
    fontWeight: '400',
    fontSize: 28,
  },
  status: {
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: 2,
    opacity: 0.75,
  },
  buttonContainer: {
    display: 'flex',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    height: 30,
    width: 30,
  },
  imgWrapper: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 26,
  },
});