import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 12,
    height: 12,
    tintColor: '#aaa',
  },
  input: {
    padding: 8,
    flex: 1,
  },
  autoCompleteResult: {
    position: 'absolute',
    width: '100%',
    marginTop: 8,
    zIndex: 100,
    elevation: 19,
    borderRadius: 8,
    alignSelf:"center"
  },
  resultText: {
    padding: 8,
    fontWeight: 'bold',
  },
});
