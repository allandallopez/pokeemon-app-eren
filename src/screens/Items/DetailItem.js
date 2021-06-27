import React, { useRef, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Animated, SafeAreaView } from 'react-native'

import { API } from '@services'

import { BackIcon } from '@svgIcons'
import { font, themes } from '@utils'

const size = Dimensions.get('screen').width

const DetailItem = ({ route, navigation }) => {
   const itemName = route.params?.itemName
   const scroll = useRef(new Animated.Value(0)).current

   const [detailItem, setDetailItem] = useState({
      data: {},
      isLoading: true,
   })

   useEffect(() => {
      API.GetDetailItem(itemName).then((response) => {
         setDetailItem((prevState) => ({
            ...prevState,
            data: response,
            isLoading: false,
         }))
      })
   }, [])

   return (
      <View style={{ ...styles.container, backgroundColor: '#FDCB6E' }}>
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
                     <Text style={styles.headerItemName}>{itemName.toUpperCase()}</Text>

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
                              uri: detailItem.isLoading ? null : detailItem.data.sprites?.default,
                           }}
                        />
                     </View>
                  </View>
               </Animated.View>

               <View style={styles.bodyMid}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                     <Text style={{ ...styles.headerItemName, fontSize: 14, marginTop: 0, color: '#000000' }}>
                        {detailItem.data.name}{' '}
                        <Text
                           style={{
                              ...styles.headerItemName,
                              fontSize: 14,
                              marginTop: 0,
                              color: '#000000',
                              fontFamily: font.PoppinsRegular,
                           }}>
                           with different names
                        </Text>
                     </Text>
                  </View>

                  <View style={styles.bodyInfo}>
                     <View style={styles.middleLine} />

                     <View>
                        <Text style={styles.titleTable}>Languange</Text>
                        {detailItem.isLoading ? null : (
                           <View style={{ marginBottom: 10, marginTop: 10 }}>
                              {detailItem.data.names.map((item) => (
                                 <Text
                                    style={{ ...styles.titleTable, fontFamily: font.PoppinsMedium, color: '#687776' }}>
                                    {item.language?.name}
                                 </Text>
                              ))}
                           </View>
                        )}
                     </View>

                     <View>
                        <Text style={styles.titleTable}>Item Name</Text>
                        {detailItem.isLoading ? null : (
                           <View style={{ marginBottom: 10, marginTop: 10 }}>
                              {detailItem.data.names.map((item) => (
                                 <Text
                                    style={{ ...styles.titleTable, fontFamily: font.PoppinsMedium, color: '#687776' }}>
                                    {item?.name}
                                 </Text>
                              ))}
                           </View>
                        )}
                     </View>
                  </View>
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
   headerItemName: {
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
      paddingHorizontal: 18,
   },
   bodyInfo: {
      width: '100%',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'solid rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      paddingHorizontal: 28,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 29,
      ...themes.shadow,
   },
   titleTable: {
      fontFamily: font.PoppinsBold,
      fontSize: 13,
      marginTop: 10,
   },
   middleLine: {
      height: '100%',
      borderWidth: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      opacity: 0.2,
      position: 'absolute',
      right: Dimensions.get('screen').width / 2.2,
   },
})

export default DetailItem
