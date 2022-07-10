import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 22,
  },
  component: {
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
