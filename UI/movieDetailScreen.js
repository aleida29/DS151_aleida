import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View>
        <Image source={{ uri: posterUrl }} style={{ width: 200, height: 300 }} />
      <Text>Title: {movie.title}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      <Text>Overview: {movie.overview}</Text>
      {/* Add more movie details as needed */}
    </View>
  );
};

export default MovieDetailsScreen;
