import React, { useState } from 'react'
import ModalAdd from '../ModalAdd'

const Header = ({ searchQuery, handleSearch, refresh }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div>
      <div className="p-4">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          VU<span className="text-blue-700">TT</span>R
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Very Useful Tools to Remember
          <span className="text-sm">
            {' ('}
            Ferramentas muito úteis para lembrar{') '}
          </span>
        </p>
      </div>
      <div className="block mx-3 md:flex md:justify-between">
        <input
          type="search"
          className={`w-full px-3 py-1.5 text-gray-700
           bg-white border-2 border-solid border-gray-300 rounded 
           transition ease-in-out focus:text-gray-700 mb-2
           focus:bg-white md:w-3/6 md:h-12`}
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          className={`px-6 py-2
       border-2 border-green-600 text-green-600 
       font-medium text-xs uppercase
       rounded transition w-full mb-6
       duration-150 ease-in-out md:w-2/6 md:h-12 hover:bg-green-600 hover:text-green-100`}
          onClick={() => {
            setShow(true)
            setModal(modal)
          }}
        >
          Adicionar ferramenta
        </button>
      </div>

      <ModalAdd refresh={refresh} show={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default Header
