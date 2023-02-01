import React from 'react'

const Input = ({ label, nome, handleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        value={nome}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Input
