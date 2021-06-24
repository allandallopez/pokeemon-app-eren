import React from 'react'

import Routes from '@routes'
import PokedexContextProvider from '@context/PokedexContext'

const App = () => {
   return (
      <PokedexContextProvider>
         <Routes />
      </PokedexContextProvider>
   )
}

export default App
