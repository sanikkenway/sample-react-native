import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/albums/Header';
import AlbumList from './components/albums/AlbumList';

class Album extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Album'} />
        <AlbumList />
      </View>
    );
  }
}

export default Album;
