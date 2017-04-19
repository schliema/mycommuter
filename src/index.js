import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tripApp from './reducers'
import App from './components/App'

let store = createStore(tripApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)