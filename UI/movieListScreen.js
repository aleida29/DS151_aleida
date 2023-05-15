import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from './searchBar';
import { useNavigation } from '@react-navigation/native';
import { getPopularMovies, searchMovies } from '../controller/moviesController';
import CustomButton from './CustomButton';
import { StyleSheet } from 'react-native-web';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchResults();
    } else {
      fetchMovies();
    }
  }, [searchQuery]);

  const fetchMovies = async () => {
    try {
      const movieData = await getPopularMovies();
      setMovies(movieData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchResults = async () => {
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMovieDetails(item)}>
      <View>
      <Text style={styles.textStyles}>{item.title}</Text>
      <CustomButton title="Info" onPress={() => handleMovieDetails(item)} />
      </View>
    </TouchableOpacity>
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const styles = StyleSheet.create({
    textStyles: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18, // Adjust the fontSize as needed
    },
  });
  

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieListScreen;
