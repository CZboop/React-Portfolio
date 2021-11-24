import React from 'react'
import './Intro.css'

function Intro(props) {
    return (
        <div className='IntroContainer'>
            <div className='IntroTop'> 
            <div className='TitleDiv'>
            <h2>{props.title}</h2>
            </div>
            <div className='Button1'>&nbsp; </div>
            <div className='Button2'>&nbsp;</div>
            <div className='Button3'>&nbsp;</div>
            </div>
            <div className='IntroBottom'>
            <p>{props.content}</p>
        </div>
        </div>
    )
}

export default Intro
