import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './components/main-panel'

const NewApp = require('./components/main-panel').default

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp(MainPanel)

if (module.hot) {
  module.hot.accept('./components/main-panel', () => {
    renderApp(NewApp)
  })
}
