import React, { useEffect, useState } from 'react'
import formTemplate from '../data/formTemplate.json'

export default function Form() {
  const [template, setTemplate] = useState([])

  // Would be replaced by get request from an API in a real work example
  useEffect(() => setTemplate(formTemplate),[])

  return <form>
    <h1>Payroll Enquiry</h1>
    <label htmlFor='reason'>Reason for enquiry</label>
    <input type='textbox' id='reason'></input>
    <label htmlFor='date'>Date</label>
    <input type='date' id='date'></input>
    <label htmlFor='query'>Query</label>
    <input type='textbox' id='query'></input>
    <button type="submit">Submit</button>
  </form>
}