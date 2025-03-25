import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../CardPokemon/CardPokemon.styles';

interface CardPokemonProps{
    name:string;
    sprite: string;
}
export function CardPokemon({ name , sprite } : CardPokemonProps){
    return(
        <View style={styles.pokemonCard}>
          <Text style={styles.pokemonName}>{name}</Text>
          <Image source={{ uri: sprite}} style={styles.pokemonImage}/>
        </View>
    )
}