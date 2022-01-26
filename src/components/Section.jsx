import React from 'react'
import './styles/Section.css'
import Jay from './assets/Jay.jpg'

const Section = () => {
    return (
        <section className='main-section'>

            <div className='container'>

                <div className='texts'>
                    <h1>Hello, My Name is</h1>
                    <h1 className='h1-big'>Jaylin Gross</h1>
                    <p> A 26 year old Full Stack Web Developer looking to colaborate on projects and sharpen my skills. </p>
                </div>

                <div className='image'>
                    <img src={Jay} alt='' />
                </div>
            </div>

        </section>
    )
}

export default Section