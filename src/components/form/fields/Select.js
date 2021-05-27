import React from 'react'

export default function Select({ field, inputData, handleChange }) {

  return <>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <select id={field.fieldName}
      name={field.fieldName}
      onChange={e => handleChange(e)}>
      <option hidden>Select an option</option>
      {field.options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  </>
}