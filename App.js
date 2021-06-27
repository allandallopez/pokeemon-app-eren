import React from 'react'

import Routes from '@routes'
import PokedexContextProvider from '@context/PokedexContext'
import ItemsContextProvider from '@context/ItemsContext'

const App = () => {
   return (
      <PokedexContextProvider>
         <ItemsContextProvider>
            <Routes />
         </ItemsContextProvider>
      </PokedexContextProvider>
   )
}

export default App
