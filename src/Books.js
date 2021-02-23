import React, { Component, useState } from 'react'

const clickHandler = () => {
    alert("Thanks for buying book")
}


export const Book = ({ img, title, author, add }) => {
    const [purchased, setPurchased] = useState('')

    return (
        <div className="book">
            <img src={img}></img>
            <h1>{title}</h1>
            <p>{author}</p>
            <button type="button" onClick={() => setPurchased('Purchased!')}>Buy Now</button>
            <button onClick={add}>Add To Wishlist</button>
            <p>{purchased}</p>
        </div>
    )
}

export const BookChildren = ({ img, title, author, children }) => {
    return (
        <div className="book">
            <img src={img}></img>
            <h1>{title}</h1>
            <p>{author}</p>
            {children}
        </div>
    )
}

export class BookClass extends React.Component {
    render() {
        const { img, title, author } = this.props;
        return (
            <div>
                <img src={img}></img>
                <h1>{title}</h1>
                <p>{author}</p>
            </div>
        )
    }
}
