import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//Components
import { Home, Pokedex } from '@screens'
const StackNavigator = createStackNavigator()

const Routes = () => {
   return (
      <NavigationContainer>
         <StackNavigator.Navigator headerMode={'none'}>
            <StackNavigator.Screen options={{ gestureDirection: 'horizontal-inverted' }} name="Home" component={Home} />
            <StackNavigator.Screen name="Pokedex" component={Pokedex} />
         </StackNavigator.Navigator>
      </NavigationContainer>
   )
}

export default Routes
