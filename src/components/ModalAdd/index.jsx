import React, { useState, useContext } from 'react'
import AppContext from '../../AppContext/Context'

const ModalAdd = ({ show, onClose, setTools }) => {
  if (!show) {
    return null
  }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState('')
  const { addTool } = useContext(AppContext)

  const newTool = { title, description, link, tags: tags.split(' ') }

  const addItem = () => {
    addTool(newTool)
    // setTools(
    //   (prev) => [
    //     ...prev,
    //     {
    //       title: name,
    //       link: link,
    //       description: description,
    //       tags: tags.split(' '),
    //     },
    //   ],
    //   )
    onClose()
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
                  <label>Name da ferramenta</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
