import React, { useEffect, useState } from 'react'
import api from '../api'
import AppContext from './Context'

const AppProvider = ({ children }) => {
  const [tools, setTools] = useState([])

  useEffect(() => {
    fetchTools()
  }, [])
  // react axios get method
  const fetchTools = async () => {
    const response = await api.get('/tools')
    setTools(response.data)
  }

  // react axios post method
  const addTool = async (newTool) => {
    const response = await api.post('/tools', newTool)
    const data = response.data

    setTools([data, ...tools])
  }

  // react axios delete method
  const deleteTool = (id) => {
    api.delete(`/tools/${id}`)
    setTools(tools.filter((tool) => tool.id !== id))
  }
  return (
    <AppContext.Provider
      value={{
        tools,
        addTool,
        deleteTool,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
