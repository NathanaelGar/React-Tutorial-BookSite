import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import { Book, BookChildren, BookClass } from './Books'
import { BookList } from './Booklist'
import { Navbar } from './Navbar'
import { LandingPage } from './LandingPage'
import { Footer } from './Footer'

function BookStore() {
    return (
        <div>
            <Navbar></Navbar>
            <LandingPage></LandingPage>
            <BookList></BookList>
            <Footer />
        </div>
    )
}


ReactDOM.render(<BookStore />, document.getElementById('root'))
