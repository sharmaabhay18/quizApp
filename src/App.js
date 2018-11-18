import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';

export default class App extends Component {

  render() {

     const MainNavigator = createStackNavigator({
       Home: Home,
       Test: TestScreen,
       Result: ResultScreen
     }, {headerLayoutPreset: 'center'});

    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
