// import library
// import App from './App';
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// component
const App = () => (
    <Header headerText={'Album'} />
);

// render to device
AppRegistry.registerComponent('mobileapp', () => App);
