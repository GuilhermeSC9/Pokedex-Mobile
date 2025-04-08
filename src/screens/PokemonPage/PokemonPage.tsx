import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

import { styles } from './PokemonPageStyles';
import { Header } from '../../components/Header/Header'
import { Pokemon } from '../../models/PokemonModel';
import { RouteProp, useNavigation } from '@react-navigation/native';
import PokemonTypeColors from '../../utils/colors';



type RootStackParamList = {
  PokemonPage: { pokemon : Pokemon };
};

type PokemonPageRouteProp = RouteProp<RootStackParamList, "PokemonPage">;

interface Props {
  route: PokemonPageRouteProp;
}
export function PokemonPage({route}: Props) {
  const navigation = useNavigation<any>();
  const [mostrarShiny, setMostrarShiny] =useState(false); 
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header />
        </View>
        {
          pokemon.id &&(
            <>
              <Text style={styles.pokemonName}>
                {pokemon.id} - {pokemon.name}
              </Text>
              <Image source= {{ uri: mostrarShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default }} style={styles.pokemonImage} />

              <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                <Button onPress={() => {navigation.goBack()}} title='Voltar' />
                <Button onPress={() => {setMostrarShiny(!mostrarShiny)}} title={mostrarShiny ? "Mostrar Versão Normal" : "Mostrar Versão Shiny"}/>
              </View>

              <View style={styles.pokemonTypes}></View>
              <Text style={styles.pokemonInfo}>Peso: {pokemon.weight / 10}KG. Altura: {pokemon.height / 10}M. </Text>
              <View style={styles.pokemonTypes}>
                {pokemon.types && pokemon.types.map((type, index) => (
                    <Text key= {index} style= {[styles.pokemonType, {backgroundColor: PokemonTypeColors [type.type.name] || "#777"}]}> {type.type.name}</Text>
                  ))}
              </View>
              </>
          )}
    </View>
  );
}