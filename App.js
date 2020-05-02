/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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
      'http://api.openweathermap.org/data/2.5/weather?q=Nice,FR&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
    )
      .then(response => {
        return response.json();
      })
      .then(
        data => {
          console.log(data);
          this.setState({temperature: data.main.temp});
          this.setState({humidité: data.main.humidity});
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

  changeValue = () => {
    this.setState({ville: TextInput.value});
    let villeSelector = this.state.ville;

    getWeather = () => {
      fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          villeSelector +
          '&appid=4a43bb5dfdea66ce80a9c846b9fc5423&units=metric',
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({temperature: data.main.temp});
          this.setState({humidité: data.main.humidity});
          this.setState({vent: data.wind.speed});
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
            <Image style={styles.tinyLogo} source={{uri: this.state.icon}} />
            <View style={styles.cityContainer}>
              <TextInput
                style={styles.cityText}
                placeholder="Search for a city here">
                {this.state.ville}
              </TextInput>
            </View>
            <View style={styles.tempsContainer}>
              <Text style={styles.tempText}>{this.state.temperature} C˚</Text>
            </View>
            <View style={styles.situationContainer}>
              <Text style={styles.situationText}>
                {' '}
                Wind: {this.state.vent} km/h{' '}
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.changeValue}>
              <Text>Refresh</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
