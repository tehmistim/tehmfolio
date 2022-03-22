import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TEHMISTIM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/tehmistim"><FaFacebookF/></a>
        <a href="https://instagram.com/louisianahuskyrescue"><FiInstagram/></a>
        <a href="https://youtube.com/c/fullattentiontodetail"><BsYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; tehmistim</small>
      </div>
    </footer>
  )
}

export default Footer