import React, { useEffect, useState } from 'react'
import formTemplate from '../../data/formData.json'
import Header from './other-form-elements/Header'
import Input from './fields/Input'
import Select from './fields/Select'
import Textarea from './fields/Textarea'
import Button from './other-form-elements/Button'


export default function Form() {
  const [formData, setFormData] = useState([])
  const [inputData, setInputData] = useState({
    'enquiry-reason': '',
    'date': '',
    'query': ''
  })

  // Could be replaced by a get request from an API
  useEffect(() => setFormData(formTemplate), [])


  function handleChange(event) {
    setInputData({ ...inputData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Your form has been submitted')
  }

  function validateRequiredFields() {
    const requiredFields = formData.filter(field => field.isRequired)
    return requiredFields.reduce((_result, field) => 
    inputData[field.fieldName] ? true : false, false)
  }

  return <form onSubmit={handleSubmit}>
    {formData.map(field => {
      return <div key={field.fieldName}>
        {field.fieldType === 'header' && <Header field={field} />}
        {field.fieldType === 'select' && <Select field={field} inputData={inputData} handleChange={handleChange} />}
        {field.fieldType === 'date' && <Input field={field} inputData={inputData} handleChange={handleChange} />}
        {field.fieldType === 'textarea' && <Textarea field={field} inputData={inputData} handleChange={handleChange} />}
      </div>
    })
    }
    <Button validate={validateRequiredFields}/>
  </form>
}