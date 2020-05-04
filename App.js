/**
 * TODO find a good UI / UX library interface
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './style';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration(config);
navigator.geolocation = require('@react-native-community/geolocation');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      humidite: '',
      vent: '',
      ville: '',
      icon: '03d',
      villeaAfficher: '',
      situation: '',
      temperatureMin: '',
      temperatureMax: '',
    };
  }

  componentDidMount() {
    // TODO add geolocation
    // Geolocation.requestAuthorization()
    // Geolocation.getCurrentPosition(info => console.log(info));

    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
    )
      .then(response => {
        return response.json();
      })
      .then(
        data => {
          console.log(data);

          this.setState({situation: data.weather[0].main});
          this.setState({temperature: data.main.temp});
          this.setState({temperatureMin: data.main.temp_min});
          this.setState({temperatureMax: data.main.temp_max});
          this.setState({humidite: data.main.humidity});
          this.setState({vent: data.wind.speed});
          this.setState({villeaAfficher: data.name});
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

  changeValue = text => {
    this.setState({ville: text});
  };

  getWeather = () => {
    let thisStateVille = this.state.ville;
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        thisStateVille +
        '&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({situation: data.weather[0].main});
        this.setState({temperature: data.main.temp});
        this.setState({temperatureMin: data.main.temp_min});
        this.setState({temperatureMax: data.main.temp_max});
        this.setState({humidite: data.main.humidity});
        this.setState({vent: data.wind.speed});
        this.setState({villeaAfficher: data.name});
        let weatherIcon = data.weather;
        this.setState({
          icon:
            'http://openweathermap.org/img/wn/' +
            weatherIcon[0].icon +
            '@2x.png',
        });
        error => {
          console.log(error);
        };
      });
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
        <ImageBackground source={require('./img/wp.jpeg')} style={styles.image}>
          <ScrollView>
            <View style={styles.appContainer}>
              <Text style={styles.meteoText}> Today's weather: </Text>
            </View>
            <View style={styles.tempsContainer}>
              <Text style={styles.tempText}>{this.state.situation}</Text>
            </View>
            <Image style={styles.tinyLogo} source={{uri: this.state.icon}} />
            <View style={styles.cityContainer}>
              <TextInput
                style={styles.cityText}
                placeholder="Search for a city here"
                value={this.state}
                onChangeText={this.changeValue}
                defaultValue={''}
                editable
              />
            </View>
            <View>
              <Text style={styles.tempText}>{this.state.villeaAfficher}</Text>
            </View>
            <View style={styles.tempsContainer}>
              <Text style={styles.tempText}>
                {Math.round(this.state.temperature)} C˚
              </Text>
            </View>
            <View style={styles.tempsContainer}>
              <Text style={styles.tempTextMinMax}>
                {' '}
                (min {Math.round(this.state.temperatureMin)}C˚ / max{' '}
                {Math.round(this.state.temperatureMax)}C˚)
              </Text>
            </View>
            <View style={styles.situationContainer}>
              <Text style={styles.situationText}>
                {' '}
                Wind: {Math.round(this.state.vent)} km/h{' '}
              </Text>
            </View>
            <View style={styles.tempsContainer}>
              <Text style={styles.tempText}>
                {' '}
                Humidity: {this.state.humidite} %
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.getWeather}>
              <Text>Refresh</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
