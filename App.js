import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './UI/movieListScreen';
import MovieDetailsScreen from './UI/movieDetailScreen';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {

  return (
      
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen name="Movie List" component={MovieListScreen} />
        <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}