import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const [tools, setTools] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredList, setFilteredList] = useState([])

  // Pegando dados do data.json
  const init = async () => {
    await axios.get('http://localhost:3000/tools').then((response) => {
      setTools(response.data)
    })
  }
  useEffect(() => {
    init()
  }, [])
  if (!tools) return null

  // Filtro de Pesquisa
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = tools.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    setFilteredList(searchList)
  }

  return (
    <div className="grid h-5/6 place-items-center">
      <Header
        refresh={init}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />

      <div>
        {searchQuery
          ? filteredList.map((tool) => (
              <Card
                refresh={init}
                card_id={tool.id}
                key={tool.id}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
              />
            ))
          : tools.map((tool) => (
              <Card
                refresh={init}
                card_id={tool.id}
                key={tool.id}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
              />
            ))}
      </div>
    </div>
  )
}

export default App
