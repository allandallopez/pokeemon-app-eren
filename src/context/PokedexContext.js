import React, { createContext, useEffect, useState } from 'react'

import { API } from '@services'

export const PokedexContext = createContext()
export const PokedexContexConsumer = PokedexContext.Consumer

const PokedexContextProvider = ({ children }) => {
   const [pokedexList, setPokedexList] = useState({
      items: [],
      isLoading: true,
   })

   useEffect(() => {
      API.GetPokedex().then((response) => {
         setPokedexList((prevState) => ({
            ...prevState,
            items: response.results,
         }))
      })
   }, [])

   return (
      <PokedexContext.Provider
         value={{
            pokedexList: pokedexList,
         }}>
         {children}
      </PokedexContext.Provider>
   )
}

export default PokedexContextProvider
