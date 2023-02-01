import React, { useState } from 'react'
import ModalRemove from '../ModalRemove'

const Card = ({ title, description, tags, card_id, refresh, link }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState()

  return (
    <div className="mx-14 w-[60vw] mb-5 border-2 bg-white p-10">
      <div className="flex justify-between items-center md:px-8 mb-5">
        <h1 className="text-xl font-extrabold">{title}</h1>
        <button
          onClick={() => {
            setShow(true)
            setModal(modal)
          }}
          className="text-1xl rounded-md font-medium text-black transition duration-300 hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div>
        <p>{description}</p>

        <div className="my-3">
          {tags.map((tag) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          className={`${
            link
              ? 'bg-transparent border-2 border-sky-600 hover:bg-sky-600 hover:text-white'
              : 'hidden'
          } p-1 px-3 text-sm rounded-md`}
        >
          Ver mais
        </a>
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
