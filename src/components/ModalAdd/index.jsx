import React, { useState } from 'react'
import api from '../../api'

const ModalAdd = ({ show, onClose, refresh }) => {
  if (!show) {
    return null
  }

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState('')

  const addItem = () => {
    api
      .post('/tools', {
        title: nome,
        link: link,
        description: descricao,
        tags: tags.split(' '),
      })
      .then(() => {
        refresh()
        onClose()
      })
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={onClose}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Adicionar nova ferramenta
              </h3>
              <form className="space-y-6">
                <div>
                  <label>Nome da ferramenta</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Link da ferramenta</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Descrição</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Tags</label>
                  <input
                    placeholder="Separe as tags apenas por espaços"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                  />
                </div>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={addItem}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Adicionar ferramenta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalAdd
