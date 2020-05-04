import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import SignInStyle from './SignInStyle';
import SignOutStyle from '../SignOut/SignOutStyle';

class SignIn extends Component {
  render() {
    return (
      <View style={SignInStyle.pageContainerSignIn}>
        <TextInput style={SignInStyle.adresseMailInput} placeholder="mail" />
        <TextInput
          style={SignInStyle.motDePasseInput}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={SignInStyle.sendSignInButton}
          onPress={() => this.props.navigation.navigate('app')}>
          <Text>Connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
