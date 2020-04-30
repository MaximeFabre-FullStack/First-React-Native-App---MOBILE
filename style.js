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
  meteoText: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.9,
  },
  cityContainer: {},
  cityText: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -530,
  },
  tempContainer: {},
  tempText: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -640,
  },
  situationContainer: {},
  situationText: {
    color: 'white',
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -360,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    opacity: 0.5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
});

export default styles;
