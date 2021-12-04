import React from 'react'
import Project from './Project'
import './ProjectsBox.css'

const automataDesc = () => {
    return (
        <>
        <p>A personal project made using Python, utilising the PyGame library to create and display customisable cellular automata within a GUI desktop application. The image shows an example of a customised automata that has just been set up and is running within the same application.</p>
        <p>Features several screens, including a menu where the user can select the Game of Life, Day and Night or be taken to the setup screen for their own automata. The customisation screen features widgets I created myself using PyGame's basic shape drawing tools, such as sliders and simple check boxes.</p>
        <p>Check out the code and more demo gifs on the Github repo!</p>
        </>
    )
}


const langtonDesc = () => {
    return (
        <>
        <p>Langton's Ant, look at it go! </p>
        <p>A Pygame program that runs Langton's Ant, the famous turmite. Users can restart the ant and save images from the program. The gif displayed here is put together from several uses of the in-program save feature, which saves the grid/canvas portion of the program on each click.</p>
        <p>A demo of the full application window and the whole ant life cycle is on Github, alongside all the code for the project.</p>
        </>
    )

}

const scrabbleDesc = () => {
    return (
        <> 
        <p>A single player Scrabble game made using Python's standard Tkinter library.</p>
        <p>Featuring letter and word multipliers, user entry for blank squares, colour and name customisation, a high score board, bonus words and a hacky 'cheat code' that gives extra points for entering a version of the Konami Code.</p>
        <p>Uses a 2d array to back the user-facing grid, tracking what letters have been played where, helping players to make a word using letters that were already on the board.</p>
        </>
    )

}

const pysoreDesc = () => {
    return (
        <>
        <p>A cross-platform photo app made using Kivy and Python. Features a range of filters including live video ASCII, pixel sorting, a glitchy 'crying' effect and more! </p>
        <p>Has a splash screen alongside the main photo screen, with a collapsable menu where filters can be selected. Users can save images with the effects applied.</p>
        <p>Filters were made by manipulating the NumPy arrays that hold the video pixels, as well as some use of OpenCV's face and eye detection.</p>

        </>
    )

}

const miniProjDesc = () => {
    return (
        <>
        <p>
            Some of the things I've enjoyed working on the most have been smaller-scale projects. Examples include:</p>
                <p>- A SuperCollider + Python synthesiser you can control through your webcam, that responds to the sign of the horns.</p>
                <p>- A Java tool to write a story with you through the command line, using the work of prominent authors to generate text.</p>
            <p>Check out these, plus new projects, my bootcamp coursework and more over on Github!
        </p>
        </>
    )
}

const automataAltText = "A looping gif showing a grid of small green and black squares with each cell switching between those two colours in wave-like patterns";
const langtonAltText = "A looping gif showing a lilac canvas with a growing black pattern being drawn onto it";
const scrabbleAltText = "A scrabble style computer application window, with several words on the game grid";
const pysoreAltText = "A person's head and shoulders with an extreme glitch effect applied creating bands and grains of bright colours";
const miniProjAltText = "A person using a hand detection program that draws lines and circles over key points in their hand, with some computer code in the background";

function ProjectsBox() {
    return (
        <div className="ProjectsBoxContainer">
            <Project title="Cellular Automata" content={automataDesc()} image="https://github.com/CZboop/Cellular-Automata/blob/main/images/automata%20running.gif?raw=true" link="https://github.com/CZboop/Cellular-Automata" alt={automataAltText}/>
            <Project title="Langton's Ant" content={langtonDesc()} image="https://github.com/CZboop/Langtons-Ant/blob/main/antimation.gif?raw=true" link="https://github.com/CZboop/Langton" alt={langtonAltText}/>
            <Project title="PyScrabble" content={scrabbleDesc()} image="https://github.com/CZboop/PyScrabble/blob/main/scrabble_game.jpg?raw=true" link="https://github.com/CZboop/PyScrabble" alt={scrabbleAltText}/>
            <Project title="PySore" content={pysoreDesc()} image={"https://github.com/CZboop/pySore/blob/main/save_from_app_demo.jpg?raw=true"} link="https://github.com/CZboop/pySore" alt={pysoreAltText}/>
            <Project title="Mini Projects & More!" content={miniProjDesc()} image={"https://github.com/CZboop/Webcam-Theremin/blob/main/synth_spidey.png?raw=true"} link="https://github.com/CZboop" alt={miniProjAltText}/>
        </div>
    )
}

export default ProjectsBox
