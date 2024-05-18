import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Form } from './form/Form.jsx'
import TicTak from './tic tac toe/TicTak.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form/> */}
    <TicTak/>
  </React.StrictMode>,
)
