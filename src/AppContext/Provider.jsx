import React from 'react'
import AppContext from './Context'

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ user: 'Teste' }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
