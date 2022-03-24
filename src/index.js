import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'
import App from './App'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
    <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_ID} language='en-US'>
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
