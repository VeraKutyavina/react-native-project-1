import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e3e3e3',
    paddingTop: 32,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    width: '60%',
    padding: 12,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#327cc7',
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: '#222a46',
  },
  text: {
    color: '#949494',
    marginTop: 24,
    textAlign: 'center',
  },
  like: {
    height: 90,
    width:  90,
    marginVertical: 32,
  }
});