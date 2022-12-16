import React, { useState } from 'react'
import ModalRemove from '../ModalRemove'

const Card = ({ title, description, tags, card_id, refresh }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div className="mx-14 w-[60vw] mb-5 border-2 p-10">
      <div className="block md:flex md:justify-between">
        <h1 className="text-xl pb-3 font-extrabold">{title}</h1>
        <button
          onClick={() => {
            setShow(true)
            setModal(modal)
          }}
          className="border-2 border-red-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
        >
          Remove
        </button>
      </div>
      <div>
        <p>{description}</p>
        {tags.map((tag) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <ModalRemove
        refresh={refresh}
        id={card_id}
        name={title}
        show={show}
        onClose={() => setShow(false)}
      />
    </div>
  )
}

export default Card
