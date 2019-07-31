import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './context'
import history from './components/history'
ReactDOM.render(<ProductProvider>
    <Router history={history}>
        <App/>
     </Router>
    </ProductProvider>,document.querySelector('#root'))