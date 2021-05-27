import React from 'react'

export default function Textarea({ field, inputData, handleChange }) {

  return <>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <textarea
      id={field.fieldName}
      name={field.fieldName}
      value={inputData[field.fieldName]}
      onChange={e => handleChange(e)}>
    </textarea>
  </>
}