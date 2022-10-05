import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
    marginTop: 8,
  },
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: '#49adbd',
    flex: 2,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 16,
  },
});