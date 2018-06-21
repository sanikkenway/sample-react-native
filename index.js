// import library
// import App from './App';
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Album'} />
    <AlbumList />
  </View>
);

// render to device
AppRegistry.registerComponent('mobileapp', () => App);
