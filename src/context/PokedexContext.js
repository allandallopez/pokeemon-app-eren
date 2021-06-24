import React, { createContext, useState } from 'react'

export const PokedexContext = createContext()
export const PokedexContexConsumer = PokedexContext.Consumer

const PokedexContextProvider = ({ children }) => {
   const [pokedexList, setPokedexList] = useState([
      {
         ID: 1,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 2,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 3,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 4,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 5,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 6,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 7,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
      {
         ID: 8,
         title: 'Bulbasaur',
         imageURL:
            'https://ik.imagekit.io/callmejonna/Pokemon_App/99-991806_bulbasaur-pokemon-bulbasaur-png-removebg-preview_1_hAuKYgR4Kf.png',
      },
   ])

   const whichBgColor = (pokeID) => {
      switch (pokeID) {
         case 1:
            return '#55EFC4'
            break

         case 2:
            return '#55EFC4'
            break

         case 3:
            return '#FF6B6B'
            break

         case 4:
            return '#FF6B6B'
            break

         case 5:
            return '#48DBFB'
            break

         case 6:
            return '#48DBFB'
            break

         case 7:
            return '#48DBFB'
            break

         case 8:
            return '#FECA57'
            break

         default:
            return '#55EFC4'
            break
      }
   }

   return (
      <PokedexContext.Provider
         value={{
            pokedexList: pokedexList,

            whichBgColor: whichBgColor,
         }}>
         {children}
      </PokedexContext.Provider>
   )
}

export default PokedexContextProvider
