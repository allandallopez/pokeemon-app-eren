import React, { useContext } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { font, whichStatement } from '@utils'

const CardPokeCorner = ({ title, imageURL, type = 1, pokeID, onNavigate }) => {
   return (
      <TouchableOpacity
         onPress={onNavigate}
         style={{ ...styles.cardPoke, backgroundColor: type !== 1 ? '#ffffff' : whichStatement.whichBgColor(pokeID) }}>
         {type !== 1 ? null : <Text style={styles.cardTitle}>{title}</Text>}

         <Image
            style={{ width: 37, height: 32, position: 'absolute', bottom: 8, right: 5, zIndex: 10 }}
            source={{
               uri: whichStatement.whichIconPoke(pokeID),
            }}
         />
         <Image
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            source={require('../assets/images/card-poke-corner.png')}
         />
      </TouchableOpacity>
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
