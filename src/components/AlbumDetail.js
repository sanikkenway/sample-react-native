import React, { Component } from 'react';
import { Text } from 'react-native';
import AlbumCard from './AlbumCard';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <AlbumCard>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </AlbumCard>
  );
};

export default AlbumDetail;
