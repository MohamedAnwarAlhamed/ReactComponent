import React from 'react'
import ReactDOM from 'react-dom'

const MODEL = () => {
  return ReactDOM.createPortal(
    <h1>Model</h1>,
    document.getElementById('portal-root'),
  )
}

export default MODEL
