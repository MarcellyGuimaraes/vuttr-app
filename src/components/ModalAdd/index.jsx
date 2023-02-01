import React, { useState } from 'react'
import api from '../../api'
import { Close, ContainerAdd } from '../Container'
import Input from '../Input'

const ModalAdd = ({ show, onClose, refresh }) => {
  if (!show) {
    return null
  }

  const [title, setTitle] = useState('')
  const [descricao, setDescricao] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState('')

  function verificarUrl(url) {
    if (
      url.startsWith('https://') ||
      url.startsWith('http://') ||
      url.startsWith('www.')
    ) {
      return true
    } else {
      return false
    }
  }

  const addItem = () => {
    if (verificarUrl(link)) {
      api
        .post('/tools', {
          title: title,
          link: link,
          description: descricao,
          tags: tags.split(' '),
        })
        .then(() => {
          refresh()
          onClose()
        })
    } else {
      alert('Insira uma url valida')
    }
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
            <Input label="Título" value={title} setFunc={setTitle} />
            <Input label="Link" value={link} setFunc={setLink} />
            <Input label="Descrição" value={descricao} setFunc={setDescricao} />
            <Input label="Tags" value={tags} setFunc={setTags} />

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
