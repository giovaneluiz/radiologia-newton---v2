import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import LogoGoogle from '../assets/logoGoogle.png'
import * as AuthApi from './AuthApi.js'


export default () => {
  const loginGoogle = async () => {
    return null    
  }

  return (
    <TouchableOpacity style={styles.main} onPress={loginGoogle}>
      <Image source={LogoGoogle} style={styles.logoGoogle} />
      <Text style={styles.textGoogle}>Entrar com o Google</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 60,
    width: 220,
    backgroundColor: '#193073',
    borderRadius: 25,
    padding: 10,
    elevation: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logoGoogle: {
    width: 30,
    height: 30,
  },

  textGoogle: {
    color: 'white',
    fontWeight: 'bold',
  },
})
