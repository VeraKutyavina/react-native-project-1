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
    borderBottomWidth: 1,
    paddingRight: 24,
  },
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    fontSize: 14,
    fontColor: '#B6B6B6',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  phoneIcon: {
    height: 28,
    width: 28,
  },
  cameraIcon: {
    height: 28,
    width: 30,
  },
});