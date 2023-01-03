import { useEffect, useState } from 'react'
import api from './api'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const [tools, setTools] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredList, setFilteredList] = useState([])

  // Pegando dados do data.json
  const init = async () => {
    await api.get('/tools').then((response) => setTools(response.data))
  }
  useEffect(() => {
    init()
  }, [])
  if (!tools)
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-600 opacity-75 flex flex-col items-center justify-center">
        <h2 className="text-center text-white text-xl font-semibold">
          Carregando...
        </h2>
        <p className="w-1/3 text-center text-white">
          Talvez isso demore um pouco, não feche a página
        </p>
      </div>
    )

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
    <div className="grid h-5/6 bg-gray-200 place-items-center">
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
