import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContent: {
    display: 'flex',
    height: 256,
    backgroundColor: '#b59bdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    marginTop: 16,
    height: 128,
    width: 128,
    borderRadius: 64,
    marginRight: 16,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    color: 'white',
    marginTop: 16,
    fontWeight: '500',
    fontSize: 20,
  }
});