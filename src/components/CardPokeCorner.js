import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { PokedexContext } from '@context/PokedexContext'

import { font } from '@utils'

const CardPokeCorner = ({ title, bgColor, imageURL, type = 1, pokeID }) => {
   const pokedexContext = useContext(PokedexContext)
   return (
      <View
         style={{ ...styles.cardPoke, backgroundColor: type !== 1 ? '#ffffff' : pokedexContext.whichBgColor(pokeID) }}>
         {type !== 1 ? null : <Text style={styles.cardTitle}>{title}</Text>}

         <Image
            style={{ width: 37, height: 32, position: 'absolute', bottom: 8, right: 5, zIndex: 10 }}
            source={{ uri: imageURL }}
         />
         <Image
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            source={require('../assets/images/card-poke-corner.png')}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   cardPoke: {
      width: 159,
      height: 85,
      borderRadius: 10,
      marginBottom: 15,
      paddingHorizontal: 24,
   },
   cardTitle: {
      marginTop: 30,
      fontFamily: font.PoppinsSemiBold,
      color: '#ffffff',
      fontSize: 12,
   },
})

export default CardPokeCorner
