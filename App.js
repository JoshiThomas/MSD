/**
 * App.js
 *
 * Root component of the app, 
 * responsible for setting up routes.
 *
*/

// Libs
// import React, { Component } from 'react';
// import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, Icon } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Form, TextValidator } from 'react-native-validator-form';



// Components
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import SignedIn from './src/pages/SignedIn';


/**
 * 
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Home',
      headerTitleStyle: { alignSelf: 'center' }
    }),

  },
  SignIn: {
    screen: SignIn, navigationOptions: ({ navigation }) => ({
      headerTitle: 'Sign In with QR Code',
    }),
  },
  SignedIn: { screen: SignedIn },
});

/** 
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

//export default App;

export default App;



