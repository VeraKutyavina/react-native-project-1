import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    height: 128,
    backgroundColor: '#b59bdc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    marginTop: 12,
  },
  content: {
    padding: 24,
  },
  link: {
    color: '#b59bdc',
    fontWeight: '500',
    marginTop: 12,
  },
  date: {
    color: '#949494',
    fontWeight: '500',
    marginTop: 12,
  },
  addButton: {
    width: '100%',
    padding: 12,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#b59bdc',
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#b59bdc',
  },
  user: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#b59bdc',
    fontWeight: '700',
    marginLeft: 16,
    fontSize: 22,
  }
});