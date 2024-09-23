import { useState } from 'react'
import App from './App';
import Header from './Header';
import Hero from './assets/linkedin-hero.jpg'

function Body(){
    return(
        <body>
            <div className="card">
                <h2>Welcome to your <br /> Professional Community</h2>
                <img src={Hero} alt="Hero-img" />
            </div>
        </body>
    )
}

export default Body;