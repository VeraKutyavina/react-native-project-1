import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 16
  },
  img: {
    height: 190,
    width: 164,
  },
  star: {
    height: 30,
    width: 30,
    marginLeft: 4,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 24,
    color: '#757575',
    fontSize: 28,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#65934c',
    fontSize: 24,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#919191',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
  variantsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
  },
  size: {
    padding: 4,
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 18,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 4,
  },
  color: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 4,
  },
  addButton: {
    width: '90%',
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#54bcd7',
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
  }
});