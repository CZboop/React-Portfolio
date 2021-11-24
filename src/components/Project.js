import React from 'react'
import './Project.css'

function Project(props) {
    return (
        <div className='ProjectContainer'>
            <div className='ProjectTop'> 
            <div className='TitleDiv'>
            <h2>{props.title}</h2>
            </div>
            <div className='Button1'>&nbsp; </div>
            <div className='Button2'>&nbsp;</div>
            <div className='Button3'>&nbsp;</div>
            </div>
            <div className='ProjectBottom'>
                <div className='TextDiv'>
            <p>{props.content}</p>
            <br/>
            <a href={props.link}>Github Link</a>
            </div>
            <div className="ImageDiv">
            <img src={props.image} />
            </div>
            
        </div>
        </div>
    )
}

export default Project
