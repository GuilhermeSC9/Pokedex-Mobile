import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonPage } from './src/screens/PokemonPage/PokemonPage';
import { Pokemon } from './src/models/PokemonModel';
import { styles } from './src/screens/Home/HomeStyles';

type RootStackParamList = {
  Home: undefined;
  PokemonPage: {pokemon:Pokemon}
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, cardStyle: styles.container}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="PokemonPage" component={PokemonPage}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
