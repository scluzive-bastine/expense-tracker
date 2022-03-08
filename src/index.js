import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context/context'
import App from './App'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
