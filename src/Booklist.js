import React from 'react'
import { Book } from './Books'
const Books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71BBINThwyL._AC_UL200_SR200,200_.jpg',
        title: "We are water protecors",
        author: 'Carole lindstrome',
        genre: 'Fiction'
    },

    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
        title: "A Promised Land",
        author: 'Obama',
        genre: 'Non-fiction'
    }
]


export function BookList() {
    return (
        <div>
            <div className="booklist">
                {Books.map((book) => {

                    const { img, title, author } = book;

                    return (
                        <Book key={book.id} {...book} />)
                }
                )}
            </div>
        </div>
    )
}