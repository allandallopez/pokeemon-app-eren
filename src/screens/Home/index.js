import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { font } from '@utils'

const HomePage = () => {
   return (
      <View style={styles.container}>
         <Text style={{ marginTop: 10, fontFamily: font.PoppinsBold }}>This is home</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
})

export default HomePage
