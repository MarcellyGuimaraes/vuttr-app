import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [tools, setTools] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/tools').then((response) => {
      setTools(response.data)
    })
  }, [])
  if (!tools) return null

  return <div className="App">{tools[0].title}</div>
}

export default App
