import React from 'react'

const Input = ({ label, nome, setFunc }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        value={nome}
        onChange={(e) => setFunc(e.target.value)}
        required
      />
    </div>
  )
}

export default Input
