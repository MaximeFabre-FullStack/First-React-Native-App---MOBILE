import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    paddingTop: 8,
    color: 'black',
  },
  appContainer: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: 'black',
  },

  meteoText: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
    opacity: 0.5,
  },

  tinyLogo: {
    width: 150,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  cityText: {
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  tempText: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  situationContainer: {
    marginTop: 50,
  },

  situationText: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
  },
});

export default styles;
