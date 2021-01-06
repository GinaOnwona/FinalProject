import React, {useState} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Button from  'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import hero from './images/hero.jpg'


function Home() {

    return (
    <div className='home'>
        <div className="image">
            <img src={hero} width='100%' height='100%' alt='hero'/>
        </div>
        <div className='text'>
            <h1>Gain Total Control of Your Money</h1> 
            <p>When you’re on top of your money, life is good.
            We help you effortlessly manage your finances in one place.
            Stop checking when next is payday by having full control over your finances.
            </p>
            <br/>      
            <div>
            <Button href="http://localhost:3000/Login">Start Now</Button> <Button href="http://localhost:3000/Dashboard">Dashboard</Button>
            </div>
        </div>      
    </div>
    )
}

export default Home;
