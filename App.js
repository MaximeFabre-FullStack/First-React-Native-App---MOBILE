/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      humidite: '',
      vent: '',
      ville: '',
      icon: '',
    };
  }

  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
    )
      .then(response => {
        return response.json();
      })
      .then(
        data => {
          console.log(data);
          this.setState({temperature: data.main.temp});
          this.setState({humidité: data.main.humidity});
          this.setState({ville: data.name});
          this.setState({vent: data.wind.speed});
          let weatherIcon = data.weather;
          this.setState({
            icon:
              'http://openweathermap.org/img/wn/' +
              weatherIcon[0].icon +
              '@2x.png',
          });
          console.log(this.state.icon);
        },
        error => {
          console.log(error);
        },
      );
  }
  getWeather = () => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(
        data => {
          console.log(data);
          this.setState({temperature: data.main.temp});
          this.setState({humidité: data.main.humidity});
          this.setState({ville: data.name});
          this.setState({vent: data.wind.speed});
        },
        error => {
          console.log(error);
        },
      );
  };

  // forceDuVent = () => {
  //   if (this.state.vent != '') {
  //     let forceVent = this.state.vent;
  //     return parseFloat(forceVent * '1.85');
  //   }
  // };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar />
        <ImageBackground source={require('./img/ny.jpg')} style={styles.image}>
          <View style={styles.appContainer}>
            <Text style={styles.meteoText}> La meteo d'aujourd'hui: </Text>
          </View>
          <View style={styles.tempsContainer}>
            <Text style={styles.tempText}>{this.state.temperature}˚</Text>
          </View>
          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>{this.state.ville}</Text>
          </View>
          <View style={styles.situationContainer}>
            <Text style={styles.situationText}>
              {' '}
              Vent: {this.state.vent} km/h{' '}
            </Text>
            <Image style={styles.tinyLogo} source={{uri: this.state.icon}} />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.getWeather}>
            <Text>Rafraichir</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
