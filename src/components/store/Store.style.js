import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  safe_container: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ECEFF1',
  },
  header_text: {
    fontSize: 30,
    padding: 15,
    fontWeight: 'bold',
    color: '#800080',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  text_input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ECEFF1',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  image_last: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  stock: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  image_container: {
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
