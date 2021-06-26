import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Animated, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { API } from '@services'

import { BackIcon } from '@svgIcons'
import { font, whichStatement } from '@utils'
import About from './components/About'
import BaseStats from './components/BaseStats'

const size = Dimensions.get('screen').width
const Tab = createMaterialTopTabNavigator()

const DetailPokedex = ({ route, navigation }) => {
   const pokeID = route.params?.pokeID
   const pokeName = route.params?.pokeName
   const scroll = useRef(new Animated.Value(0)).current

   const [detailPokedex, setDetailPokedex] = useState({
      data: {},
      isLoading: true,
   })

   useEffect(() => {
      API.GetDetailPokedex(pokeName).then((response) => {
         setDetailPokedex((prevState) => ({
            ...prevState,
            data: response,
            isLoading: false,
         }))
      })
   }, [])

   return (
      <View style={{ ...styles.container, backgroundColor: whichStatement.whichBgColor(pokeID) }}>
         <SafeAreaView>
            <Animated.ScrollView
               onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], { useNativeDriver: true })}
               scrollEventThrottle={16}
               showsVerticalScrollIndicator={false}>
               <Animated.View
                  style={[
                     {
                        height: size * (2 / 2.3),
                        width: size,
                     },
                     {
                        transform: [
                           {
                              translateY: scroll.interpolate({
                                 inputRange: [-size, 0, size, size + 1],
                                 outputRange: [-size / 2, 0, size * 0.75, size * 0.75],
                                 // easing: Easing.bounce(),
                              }),
                           },
                           {
                              scale: scroll.interpolate({
                                 inputRange: [-size, 0],
                                 outputRange: [2 * 1.5, 1],
                                 extrapolate: 'clamp',
                              }),
                           },
                        ],
                     },
                  ]}>
                  <View style={styles.header}>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon color={'#ffffff'} />
                     </TouchableOpacity>
                     <Text style={styles.headerPokeName}>{pokeName}</Text>

                     <View
                        style={{
                           paddingHorizontal: 18,
                           justifyContent: 'center',
                           alignItems: 'center',
                           marginBottom: 30,
                           marginTop: 10,
                        }}>
                        <Image
                           style={{ width: 170, height: 170 }}
                           source={{
                              uri: detailPokedex.isLoading ? null : whichStatement.whichIconPoke(pokeID),
                           }}
                        />
                     </View>
                  </View>
               </Animated.View>

               <View style={styles.bodyMid}>
                  <Tab.Navigator
                     swipeEnabled={false}
                     initialRouteName={'About'}
                     tabBarOptions={{
                        activeTintColor: '#000000',
                        inactiveTintColor: '#666666',
                        labelStyle: {
                           textTransform: 'none',
                           fontSize: 13,
                           fontFamily: font.PoppinsBold,
                           flex: 1,
                           flexDirection: 'row',
                        },
                        scrollEnabled: false,
                        indicatorStyle: {
                           borderBottomWidth: 4,
                           borderBottomColor: '#A29BFE',
                        },
                        style: { backgroundColor: '#fff' },
                     }}>
                     <Tab.Screen name="About">
                        {(props) => <About {...props} detailPokedex={detailPokedex} />}
                     </Tab.Screen>
                     <Tab.Screen name="Base Stats">
                        {(props) => <BaseStats {...props} detailPokedex={detailPokedex} />}
                     </Tab.Screen>
                  </Tab.Navigator>
               </View>
            </Animated.ScrollView>

            <Image
               style={{ position: 'absolute', right: 0, top: Dimensions.get('screen').height / 6, zIndex: -10 }}
               source={require('@assets/images/fall-leaf.png')}
            />
         </SafeAreaView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   header: {
      paddingHorizontal: 18,
      paddingTop: 48,
   },
   headerPokeName: {
      fontFamily: font.PoppinsBold,
      fontSize: 36,
      color: '#ffffff',
      marginTop: 11,
   },
   bodyMid: {
      backgroundColor: '#FFF',
      marginTop: -20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      width: '100%',
      height: Dimensions.get('screen').height / 1,
      paddingVertical: 18,
      flex: 1,
      zIndex: 10,
   },
})

export default DetailPokedex
