import '../styles/Footer.css';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  {name: 'Home', to: '/'},
  {name: 'Cities', to: '/cities'},
  {name: 'NewCity', to: '/newcity'}
]

const navLinks = (page) =>  <LinkRouter className='navbar-links' to={page.to}>{page.name}</LinkRouter>

export default function Footer() {

  const scrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='Footer'>
      <div className='Footer-container row space-around'>
        <div>
          <button className="Arrow-button-footer" onClick={scrollUp}>^</button>
        </div>
        <div className='col'>
          <h5 className='text-light Footer-h5'>Sitemap</h5>
          { pages.map(navLinks) }
        </div>
        <div className='col'>
          <h5 className='text-light Footer-h5'>Contact</h5>
          <span className='text-light'>+54 911 9999-9999</span>
          <span className='text-light'>Fake Street 123</span>
        </div>
      </div>
      <div className='Footer-container row divider space-around'>
        <span className='text-center text-light'>©Copyright 2022 - All rights reserved - Lautaro Alessandro - Ignacio Giusti</span>
        <div>
          <a href='#' target="_blank"><img className='Footer-Socials' src='https://cdn-icons-png.flaticon.com/512/174/174855.png' alt='...' /></a>
          <a href='#' target="_blank"><img className='Footer-Socials' src='https://cdn-icons-png.flaticon.com/512/733/733579.png' alt='...' /></a>
          <a href='#' target="_blank"><img className='Footer-Socials' src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt='...' /></a>
          <a href='https://github.com/ignaciogiusti/mytinerary-alessandro-giusti' target="_blank"><img className='Footer-Socials' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='...' /></a>
        </div>
      </div>
    </div>
  )
}