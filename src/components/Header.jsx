import { MenuOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import './styles/Header.css'
import {Data} from './Data'

const Header = () => {

  const[open,setOpen] = useState(false)

  const showMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>Web Developer/Software Engineer</h1>
        </div>

        <ul className="ul-items">
          <li>
            <Link to="#">Home</Link>
          </li>

          <li>
            <Link to='/second'>About</Link>
          </li>

          <li>
           <a href={process.env.PUBLIC_URL + '/resume.pdf'} download='Jaylin-Resume.pdf'>Resume</a>
          </li>

          <li>
          <a href='https://github.com/JayRGross' target='_blank' rel="noopener noreferrer">Github</a>
          </li>
          <li>
          <a href='https://www.linkedin.com/in/jaylin-gross-279588214/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <div className="hamburger-menu">
            <MenuOutlined className="menu" onClick={showMenu} />
          </div>
        </ul>
      </nav>

      <nav className={open ? 'slider active' : 'slider'}>
        <ul className="slider-ul" onClick={showMenu}>
          {Data.map((item,index) => {
          return (
            <li key={index} className={item.className}>
                <Link to={item.path}>{item.text}</Link>
            </li>
          )
         })}
        </ul>

      </nav>

    </div>
  );
};
export default Header;
