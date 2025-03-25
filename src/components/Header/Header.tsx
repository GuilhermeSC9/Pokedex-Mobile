import React from 'react';
import { Image } from 'react-native';

import { styles } from './Header.styles';


export function Header() {
  return (
       <Image source={require('../../../assets/logo-pokemon.png')} style={styles.logo} />
  );
}