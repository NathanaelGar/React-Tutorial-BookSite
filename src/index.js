import React from "react"
import ReactDOM from "react-dom"
import { App } from './App'
import './index.css'
import { Book, BookChildren, BookClass } from './Books'
import { BookList } from './Booklist'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { createStore, combineReducers } from 'redux'
import allReducers from './Reducers'
import { Provider } from 'react-redux'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
