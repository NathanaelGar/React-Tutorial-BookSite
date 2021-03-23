import React, { useState } from 'react'


export function Navbar(props) {

    return (
        <div className="Navbar">
            <ul>
                <li> {props.link1}</li>
                <li> {props.link2}</li>
                <li> {props.link3}</li>
                <button>Login</button>
            </ul>
        </div>
    )

}