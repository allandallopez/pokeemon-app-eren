import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'

import { font } from '@utils'
import { isAndroid } from '@utils/deviceInfo'
import { HomeBackground } from '@svgImages'

const HomePage = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Image
            style={{ position: 'absolute', right: 0, top: 0 }}
            source={require('@assets/images/poke-background.png')}
         />

         <View style={styles.header}>
            <Text style={styles.headerTitle}>What Pokemon are you looking for?</Text>
         </View>

         {/* =================== */}

         <View style={styles.cardWrapper}>
            <TouchableOpacity
               onPress={() => navigation.navigate('Pokedex')}
               style={{ ...styles.cardMenu, backgroundColor: '#2ECC71' }}>
               <Image
                  source={require('@assets/images/lit-corner-poke.png')}
                  style={{ position: 'absolute', left: 0, top: 0 }}
               />

               <Text style={styles.cardMenuTitle}>Pokedex</Text>

               <Image
                  source={require('@assets/images/bg-card-poke.png')}
                  style={{ position: 'absolute', right: 0, top: 0 }}
               />
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => navigation.navigate('Items')}
               style={{ ...styles.cardMenu, backgroundColor: '#3498DB' }}>
               <Image
                  source={require('@assets/images/lit-corner-poke.png')}
                  style={{ position: 'absolute', left: 0, top: 0 }}
               />

               <Text style={styles.cardMenuTitle}>Items</Text>

               <Image
                  source={require('@assets/images/bg-card-poke.png')}
                  style={{ position: 'absolute', right: 0, top: 0 }}
               />
            </TouchableOpacity>
         </View>
         <View style={{ ...styles.cardWrapper, paddingTop: 20 }}>
            <TouchableOpacity style={{ ...styles.cardMenu, backgroundColor: '#ff9f43' }}>
               <Image
                  source={require('@assets/images/lit-corner-poke.png')}
                  style={{ position: 'absolute', left: 0, top: 0 }}
               />

               <Text style={styles.cardMenuTitle}>Coming soon..</Text>

               <Image
                  source={require('@assets/images/bg-card-poke.png')}
                  style={{ position: 'absolute', right: 0, top: 0 }}
               />
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.cardMenu, backgroundColor: '#ff793f' }}>
               <Image
                  source={require('@assets/images/lit-corner-poke.png')}
                  style={{ position: 'absolute', left: 0, top: 0 }}
               />

               <Text style={styles.cardMenuTitle}>Coming soon..</Text>

               <Image
                  source={require('@assets/images/bg-card-poke.png')}
                  style={{ position: 'absolute', right: 0, top: 0 }}
               />
            </TouchableOpacity>
         </View>
         {/* =================== */}

         <View style={{ position: 'absolute', bottom: isAndroid ? Dimensions.get('screen').height / -10 : 0 }}>
            <HomeBackground />
         </View>

         <Text
            style={{
               ...styles.headerTitle,
               marginTop: Dimensions.get('screen').height / 4,
               alignSelf: 'center',
               color: '#ffffff',
            }}>
            Welcome Poke !
         </Text>

         <Image
            style={{ position: 'absolute', bottom: 0, left: 0 }}
            source={require('@assets/images/big-poke-corner.png')}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   header: {
      paddingTop: 23,
      paddingHorizontal: 18,
   },
   headerTitle: {
      fontFamily: font.PoppinsBold,
      fontSize: 24,
   },
   body: {
      paddingTop: 59,
      paddingHorizontal: 18,
      flexDirection: 'row',
   },
   cardWrapper: {
      flexDirection: 'row',
      paddingTop: 59,
      paddingHorizontal: 18,
      justifyContent: 'space-between',
   },
   cardMenu: {
      width: 159,
      height: 60,
      borderRadius: 10,
      paddingHorizontal: 18,
      paddingVertical: 16,
      alignItems: 'center',
      overflow: 'hidden',
   },
   cardMenuTitle: {
      fontFamily: font.PoppinsBold,
      color: '#FFFFFF',
      fontSize: 16,
   },
})

export default HomePage
