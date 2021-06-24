import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { PinLocIcon, ProfileDummyIcon, MoreIcon } from '@svgIcons'
import { themes, font, thousandSeparator } from '@utils'

const CardProperty = ({ data }) => {
   return (
      <TouchableOpacity style={styles.itemCard}>
         <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 13 }}>
            <View style={styles.profile}>
               <ProfileDummyIcon width={40} height={40} />
            </View>

            <View style={{ marginLeft: 8 }}>
               <Text style={styles.userTitle}>{data.username}</Text>
               <Text style={{ ...styles.userTitle, fontWeight: 'normal', fontSize: 10 }}>{data.userLocation}</Text>
            </View>

            <TouchableOpacity style={{ marginLeft: 150, alignItems: 'center', justifyContent: 'center' }}>
               <MoreIcon />
            </TouchableOpacity>
         </View>
         <Image source={data.property.image} style={{ width: '100%', marginTop: 7 }} />

         <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
               <Text style={{ ...styles.userTitle, fontWeight: '600', fontSize: 10, marginBottom: 7 }}>
                  {data.property.name}
               </Text>

               {!data.isPublic && (
                  <View
                     style={{
                        ...styles.flagStatus,
                        backgroundColor: '#242426',
                        width: 49,
                        height: 18,
                        borderRadius: 20,
                     }}>
                     <Text style={{ ...styles.userTitle, fontSize: 8, color: '#fff' }}>PRIVATE</Text>
                  </View>
               )}
            </View>
            <Text style={{ ...styles.userTitle, fontWeight: 'bold', fontSize: 20 }}>
               Rp {thousandSeparator(data.price)}
               <Text style={{ ...styles.userTitle, fontWeight: 'bold', fontSize: 20 }}>
                  {data.isMonthly ? ' / Perbulan' : null}
               </Text>
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Text style={{ ...styles.userTitle, fontWeight: '700', fontSize: 14, marginRight: 10 }}>
                  {data.categoryName}
               </Text>

               <View style={{ ...styles.flagStatus, backgroundColor: data.type === 1 ? '#5497F1' : '#71C392' }}>
                  <Text style={{ ...styles.userTitle, fontSize: 10, color: '#fff' }}>
                     {data.type === 1 ? 'Dijual' : 'Disewa'}
                  </Text>
               </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
               <PinLocIcon />

               <Text
                  style={{
                     ...styles.userTitle,
                     fontSize: 10,
                     color: '#fff',
                     marginLeft: 6,
                     color: '#838383',
                     fontWeight: 'normal',
                  }}>
                  {data.property.location}
               </Text>
            </View>

            <View style={styles.borderLine} />

            <View style={{ flexDirection: 'row', paddingTop: 13 }}>
               {data.facilities.map((facility, index) => (
                  <View style={{ flexDirection: 'row' }} key={index}>
                     <View style={{ marginRight: 28 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                           <View style={{ marginRight: 14.15 }}>{facility.icon}</View>

                           <Text style={styles.userTitle}>{facility.ability}</Text>
                        </View>

                        <Text
                           style={{
                              ...styles.userTitle,
                              fontSize: 10,
                              color: '#fff',
                              color: '#838383',
                           }}>
                           {facility.title}
                        </Text>
                     </View>

                     {index === data.facilities.length - 1 ? null : (
                        <View style={{ ...styles.borderLine, width: 0, height: 40, marginRight: 14 }} />
                     )}
                  </View>
               ))}
            </View>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   flagStatus: {
      width: 50,
      height: 16,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
   },
   itemCard: {
      ...themes.shadow,
      width: '89%',
      height: 349,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      marginHorizontal: 22,
   },
   profile: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: 44,
      height: 44,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#BEAF87',
   },
   userTitle: {
      fontFamily: font.AvenirRegular,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#323232',
   },
   borderLine: {
      width: '100%',
      height: null,
      borderWidth: 1,
      borderColor: '#F2F2F2',
   },
})

export default CardProperty
