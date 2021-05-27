import React from 'react'

export default function Button({ validate }) {
  return <button type='submit' disabled={!validate()}>Submit</button>
}