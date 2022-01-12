import React from 'react'
import './styles/Second.css'
import project from './assets/project.png'

const Second = () => {
    return (
        <section className="section-2">
            <h1 className="about-me">About Me</h1>

            <div className="contaner-2">


                <div className="image-cont">
                    <img src={project} alt=""/>
                </div>

                <div className="text-2">
                    <p>Front-End Developer</p>
                    <p>React js and Node js Developer</p>
                    <p>MERN Stack Developer</p>
                    <p>Worked for University of Michigan Hospital</p>
                    <p>Team Player</p>
                    <p>Good Time Management and Communication</p>
                    <p>Eager to Learn</p>
                </div>
            </div>

        </section>
    )
}

export default Second