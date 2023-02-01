import React from 'react'

export const Close = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-black opacity-40"
      onClick={onClose}
    ></div>
  )
}

export const ContainerAdd = ({ children }) => {
  return (
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="px-6 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  )
}

export const ContainerRemove = ({ children }) => {
  return (
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="mt-3 sm:flex">
          <div className="p-6 text-center">{children}</div>
        </div>
      </div>
    </div>
  )
}
