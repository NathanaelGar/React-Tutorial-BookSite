import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import { Book, BookChildren, BookClass } from './Books'
import { BookList } from './Booklist'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from './Home'
import { About } from './About'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Actions'

export function App() {

    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch();

    return (
        <div className="main-flex">
            <div className="main">
                <Router>
                    <Navbar
                        link1={<Link to="/">Home</Link>}
                        link2={<Link to="/books">Books</Link>}
                        link3={<Link to="/about">About</Link>}
                    />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/books">
                            <BookList />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <h1>Counter: {counter} </h1>
            <button onClick={() => dispatch(increment(10000))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <Footer />
        </div>
    )
}

