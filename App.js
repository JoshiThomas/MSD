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



// Components
import Home from './src/Home';
import SignIn from './src/SignIn';

 
/**
 * 
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Home: { screen: Home },
    SignIn: { screen: SignIn },
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



