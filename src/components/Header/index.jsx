import React, { useState } from 'react'
import ModalAdd from '../ModalAdd'

const Header = ({ searchQuery, handleSearch, refresh }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div className="">
      <div className="pb-6">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
          VUTTR
        </h1>
        <h3 className='"font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600"'>
          Very Useful Tools to Remember
        </h3>
        <span className="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
          Ferramentas muito úteis para lembrar
        </span>
      </div>
      <div className="flex justify-between m-4">
        <input
          type="search"
          id="search"
          className="border-2 p-1 border-slate-300 rounded-lg"
          placeholder="Search"
          required
          value={searchQuery}
          onChange={handleSearch}
        />
        <div>
          <button
            onClick={() => {
              setShow(true)
              setModal(modal)
            }}
            className="m-3"
          >
            Add
          </button>
        </div>
      </div>

      <ModalAdd refresh={refresh} show={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default Header
