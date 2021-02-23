import React, { useState } from 'react'
import { Book } from './Books'
import { BooksData } from './BooksData'

const wishlistData = [

]

export function BookList() {

    const [wishlist, setWishlist] = useState(wishlistData);

    const addToWL = (book) => {
        const newWL = wishlist.concat(book);
        setWishlist(newWL);
    }

    return (
        <div className="flex-container">
            <div className="booklist">
                {BooksData.map((book) => {

                    const { img, title, author } = book;

                    return (
                        <Book add={() => addToWL(book)} key={book.id} {...book} />)
                }
                )}
            </div>

            <div className="wishlist">

                <h1>Wishlist</h1>
                {wishlist.map((book) => {
                    const { id, title, author } = book;
                    return <div key={id} className="item">
                        <h4>{title}</h4>
                        <p>{author}</p>
                    </div>
                })
                }
                <button onClick={() => setWishlist([])}>
                    Clear Items
                </button>

            </div>
        </div>
    )
}