import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { font } from '@utils'

const BaseStats = ({ detailPokedex }) => {
   return (
      <View style={styles.container}>
         {detailPokedex.isLoading ? null : (
            <View style={{ marginTop: 10 }}>
               {detailPokedex.data?.stats.map((item, index) => (
                  <View
                     key={index}
                     style={{
                        width: '100%',
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                     }}>
                     <View style={{ width: 90, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 70 }}>
                           <Text
                              numberOfLines={1}
                              ellipsizeMode="tail"
                              style={{ ...styles.headerTitle, fontFamily: font.PoppinsMedium, marginBottom: 10 }}>
                              {item.stat.name === 'special-attack'
                                 ? item.stat.name.replace('special-attack', 'SPEC ATT')
                                 : item.stat.name === 'special-defense'
                                 ? item.stat.name.replace('special-defense', 'SPEC DEF')
                                 : item.stat.name.toUpperCase()}
                           </Text>
                        </View>

                        <Text style={{ ...styles.headerTitle, fontFamily: font.PoppinsBold, marginBottom: 10 }}>
                           {item.base_stat}
                        </Text>
                     </View>
                     <View
                        style={{
                           width: '70%',
                           height: 8,
                           borderRadius: 36,
                           backgroundColor: '#BDF5F1',
                           overflow: 'hidden',
                           marginTop: 5,
                        }}>
                        <View
                           style={{
                              width: `${(item.base_stat / 100) * 100}%`,
                              height: 8,
                              borderRadius: 36,
                              backgroundColor: item.base_stat < 50 ? '#e74c3c' : '#3498db',
                           }}
                        />
                     </View>
                  </View>
               ))}
            </View>
         )}

         <View style={{ marginTop: 20 }}>
            <Text style={{ ...styles.headerTitle, marginBottom: 5 }}>Note </Text>
            <Text style={{ ...styles.headerTitle, fontFamily: font.PoppinsMedium, opacity: 0.5 }}>
               The scale is from 0 to 100
            </Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 26,
      paddingHorizontal: 18,
      backgroundColor: '#FFF',
      flex: 1,
   },
   headerTitle: {
      fontFamily: font.PoppinsSemiBold,
      fontSize: 13,
      marginBottom: 21,
   },
})

export default BaseStats
