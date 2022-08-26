import '../styles/Footer.css';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  {name: 'Home', to: '/'},
  {name: 'Cities', to: '/cities'},
  {name: 'NewCity', to: '/newcity'}
]

const navLinks = (page) =>  <LinkRouter className='text-light' to={page.to}>{page.name}</LinkRouter>

export default function Footer() {

  const scrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const fullYear = new Date ();
  const year = (fullYear.getFullYear())

  return (
    <div className='Footer'>
      <div className='Footer-container row space-around'>
        <div className='col Footer-p'>
          <h5 className='text-light Footer-h5'>Sitemap</h5>
          { pages.map(navLinks) }
        </div>
        <div className='col'>
          <h5 className='text-light Footer-h5'>Contact</h5>
          <span className='text-light Footer-p'>+54 911 9999-9999</span>
          <span className='text-light Footer-p'>Fake Street 123</span>
        </div>
          <button className='Footer-arrow-button' onClick={scrollUp}><img src='img/arrow-up-light.png' className='Footer-arrow-img' /></button>
      </div>
      <div className='Footer-container row divider space-evenly'>
        <span className='text-center text-light'>{year} - All rights reserved - Lautaro Alessandro - Ignacio Giusti</span>
        <div>
          <a href='#' target="_blank"><img className='Footer-Socials' src='img/socials/instagram.png' alt='...' /></a>
          <a href='#' target="_blank"><img className='Footer-Socials' src='img/socials/whatsapp.png' alt='...' /></a>
          <a href='#' target="_blank"><img className='Footer-Socials' src='img/socials/twitter.png' alt='...' /></a>
          <a href='https://github.com/ignaciogiusti/mytinerary-alessandro-giusti' target="_blank"><img className='Footer-Socials' src='img/socials/github.png' alt='...' /></a>
        </div>
      </div>
    </div>
  )
}