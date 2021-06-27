import React, { createContext, useEffect, useState } from 'react'

import { API } from '@services'

export const ItemsContext = createContext()
export const ItemsContextConsumer = ItemsContext.Consumer

const ItemsContextProvider = ({ children }) => {
   const [itemsList, setItemList] = useState({
      data: [],
      isLoading: true,
   })

   useEffect(() => {
      API.GetItems().then((response) => {
         setItemList((prevState) => ({
            ...prevState,
            data: response.results,
         }))
      })
   }, [])

   return (
      <ItemsContext.Provider
         value={{
            itemsList: itemsList,
         }}>
         {children}
      </ItemsContext.Provider>
   )
}

export default ItemsContextProvider
