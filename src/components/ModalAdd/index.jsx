import React, { useState } from 'react'
import api from '../../api'
import { Close, ContainerAdd } from '../Container'
import Input from '../Input'

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
        <Close onClose={onClose} />
        <ContainerAdd>
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Adicionar nova ferramenta
          </h3>
          <form className="space-y-6">
            <Input
              label="Título"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              label="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Input
              label="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <Input
              label="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />

            <button
              data-modal-toggle="popup-modal"
              type="button"
              onClick={addItem}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Adicionar ferramenta
            </button>
          </form>
        </ContainerAdd>
      </div>
    </>
  )
}

export default ModalAdd
