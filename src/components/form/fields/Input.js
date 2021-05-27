import React from 'react'

export default function Input({ field, inputData, handleChange }) {

  return <>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <input
      type={field.fieldName}
      id={field.fieldName}
      name={field.fieldName}
      value={inputData[field.fieldName]}
      onChange={e => handleChange(e)}>
    </input>
  </>
}