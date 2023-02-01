import React from 'react'
import api from '../../api'
import { Close, ContainerRemove } from '../Container'

const ModalRemove = ({ show, onClose, id, name, refresh }) => {
  if (!show) {
    return null
  }

  const removeItem = () => {
    api.delete(`/tools/${id}`).then(() => {
      refresh()
      onClose()
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <Close />
        <ContainerRemove>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Tem certeza que quer deletar {name}?
          </h3>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            onClick={removeItem}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Sim, eu tenho certeza.
          </button>
          <button
            onClick={onClose}
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Não, cancelar
          </button>
        </ContainerRemove>
      </div>
    </>
  )
}

export default ModalRemove
