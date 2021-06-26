import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { font } from '@utils'
import { HeightIcon, WeightIcon } from '@svgIcons'

const About = ({ detailPokedex }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.descTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{' '}
         </Text>

         <View style={styles.bodyInfo}>
            <View>
               <Text style={{ ...styles.descTitle, color: '#687776', marginBottom: 5 }}>Height</Text>
               <View style={{ flexDirection: 'row' }}>
                  <HeightIcon width={20} height={20} />
                  <Text style={{ ...styles.descTitle, fontFamily: font.PoppinsRegular, marginLeft: 5 }}>
                     ({detailPokedex.data?.height} cm )
                  </Text>
               </View>
            </View>

            <View>
               <Text style={{ ...styles.descTitle, color: '#687776', marginBottom: 5 }}>Width</Text>
               <View style={{ flexDirection: 'row' }}>
                  <WeightIcon width={20} height={20} />
                  <Text style={{ ...styles.descTitle, fontFamily: font.PoppinsRegular, marginLeft: 5 }}>
                     ({detailPokedex.data?.weight} kg )
                  </Text>
               </View>
            </View>
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
   descTitle: {
      fontFamily: font.PoppinsMedium,
      fontSize: 13,
   },
   bodyInfo: {
      width: '100%',
      height: 73,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'solid rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      paddingHorizontal: 24,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 29,
   },
})

export default About
