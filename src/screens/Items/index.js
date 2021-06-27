import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'

import { ItemsContext } from '@context/ItemsContext'

import { font } from '@utils'
import { CardPokeCorner } from '@components'
import { BarIcon } from '@svgIcons'

const Items = ({ navigation }) => {
   const itemsContext = useContext(ItemsContext)

   return (
      <View style={styles.container}>
         <Image
            style={{ position: 'absolute', right: 0, top: 0 }}
            source={require('@assets/images/init-top-poke-bg.png')}
         />
         <View style={styles.header}>
            <Text style={styles.headerTitle}>Items</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 20, marginTop: 10 }}>
               <BarIcon />
            </TouchableOpacity>
         </View>

         <View style={{ paddingHorizontal: 18, marginTop: 46, flex: 1 }}>
            <FlatList
               numColumns={2}
               showsVerticalScrollIndicator={false}
               columnWrapperStyle={{ justifyContent: 'space-between' }}
               data={itemsContext.itemsList.data}
               showsHorizontalScrollIndicator={false}
               ItemSeparatorComponent={() => <View style={{ marginHorizontal: 11 }} />}
               renderItem={({ item, index }) => {
                  return (
                     <CardPokeCorner
                        onNavigate={() => navigation.navigate('DetailItem', { itemID: index, itemName: item.name })}
                        pokeID={index}
                        type={2}
                        title={item.name}
                        imageURL={item.imageURL}
                     />
                  )
               }}
               keyExtractor={(item) => String(item.name)}
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

export default Items
