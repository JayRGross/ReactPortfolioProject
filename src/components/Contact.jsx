import React from 'react'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="arrow-home">
                <Link to='/'><ArrowBack className='arrow'/></Link>
            </div>

            <form>
                <label>Your Name</label>
                <input type='text' placeholder='Enter Your Name'/>
                <label>Your Email</label>
                <input type='text' placeholder='Enter Your Email'/>
                <label>About You</label>
                <input type='text' placeholder='Enter'/>
                <label>Message</label>
                <textarea  cols='50' rows='7' placeholder='Hello . . .'></textarea>

                <button>Send</button>
            </form>



        </div>
    )
}

export default Contact