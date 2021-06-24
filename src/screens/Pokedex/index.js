import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'

import { PokedexContext } from '@context/PokedexContext'

import { font } from '@utils'
import { CardPokeCorner } from '@components'
import { BarIcon } from '@svgIcons'

const Pokedex = ({ navigation }) => {
   const pokedexContext = useContext(PokedexContext)

   return (
      <View style={styles.container}>
         <Image
            style={{ position: 'absolute', right: 0, top: 0 }}
            source={require('@assets/images/init-top-poke-bg.png')}
         />
         <View style={styles.header}>
            <Text style={styles.headerTitle}>Pokedex</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 20, marginTop: 10 }}>
               <BarIcon />
            </TouchableOpacity>
         </View>

         <View style={{ paddingHorizontal: 18, marginTop: 46 }}>
            <FlatList
               numColumns={2}
               columnWrapperStyle={{ justifyContent: 'space-between' }}
               data={pokedexContext.pokedexList}
               showsHorizontalScrollIndicator={false}
               ItemSeparatorComponent={() => <View style={{ marginHorizontal: 11 }} />}
               renderItem={({ item, index }) => {
                  return <CardPokeCorner pokeID={item.ID} title={item.title} imageURL={item.imageURL} />
               }}
               keyExtractor={(item) => String(item.ID)}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   header: {
      paddingTop: 48,
      paddingHorizontal: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   headerTitle: {
      fontFamily: font.PoppinsBold,
      fontSize: 24,
      marginTop: 23,
   },
   cardPoke: {
      width: 159,
      height: 85,
      borderRadius: 10,
      marginBottom: 15,
   },
})

export default Pokedex
