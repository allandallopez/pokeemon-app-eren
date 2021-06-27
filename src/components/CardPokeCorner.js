import React from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { font, whichStatement, themes } from '@utils'

const CardPokeCorner = ({ title, type = 1, pokeID, onNavigate }) => {
   return (
      <TouchableOpacity
         onPress={onNavigate}
         style={{ ...styles.cardPoke, backgroundColor: type !== 1 ? '#FFFFFF' : whichStatement.whichBgColor(pokeID) }}>
         <Text style={{ ...styles.cardTitle, color: type !== 1 ? '#000000' : '#ffffff' }}>{title}</Text>

         {type !== 1 ? null : (
            <Image
               style={{ width: 37, height: 32, position: 'absolute', bottom: 8, right: 5, zIndex: 10 }}
               source={{
                  uri: whichStatement.whichIconPoke(pokeID),
               }}
            />
         )}
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

      ...themes.shadow,
   },
   cardTitle: {
      marginTop: 30,
      fontFamily: font.PoppinsSemiBold,
      fontSize: 12,
   },
})

export default CardPokeCorner
