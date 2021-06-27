import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
//Screen
import { Home, Pokedex, DetailPokedex, Items, DetailItem } from '@screens'
const StackNavigator = createStackNavigator()

const Routes = () => {
   return (
      <NavigationContainer>
         <StackNavigator.Navigator headerMode={'none'}>
            <StackNavigator.Screen options={{ gestureDirection: 'horizontal-inverted' }} name="Home" component={Home} />
            <StackNavigator.Screen name="Pokedex" component={Pokedex} />
            <StackNavigator.Screen name="DetailPokedex" component={DetailPokedex} />
            <StackNavigator.Screen name="Items" component={Items} />
            <StackNavigator.Screen name="DetailItem" component={DetailItem} />
         </StackNavigator.Navigator>
      </NavigationContainer>
   )
}

export default Routes
