import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { font } from '@utils'

const BaseStats = ({ detailPokedex }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.headerTitle}>Note : the scale is from 0 to 100</Text>

         {detailPokedex.isLoading ? null : (
            <Fragment>
               {detailPokedex.data?.stats.map((item) => (
                  <View
                     style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
                     <View style={{ width: 60 }}>
                        <Text
                           numberOfLines={1}
                           ellipsizeMode="tail"
                           style={{ ...styles.headerTitle, fontFamily: font.PoppinsMedium, marginBottom: 0 }}>
                           {item.stat.name.toUpperCase()}
                        </Text>
                     </View>

                     <View
                        style={{
                           width: '80%',
                           height: 8,
                           borderRadius: 36,
                           backgroundColor: '#BDF5F1',
                           marginBottom: 6,
                        }}>
                        <View
                           style={{
                              width: `${(item.base_stat / 100) * 80}%`,
                              height: 8,
                              borderRadius: 36,
                              backgroundColor: '#3498db',
                           }}
                        />
                     </View>
                  </View>
               ))}
            </Fragment>
         )}
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
