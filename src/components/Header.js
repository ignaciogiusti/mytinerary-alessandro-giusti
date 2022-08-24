import '../styles/Header.css'
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'NewCity', to: '/newcity' }
]

const navLinks = (page) => <LinkRouter className='navbar-links menu-hover' to={page.to} key={page.name}>{page.name}</LinkRouter>


export default function Header() {

  console.log("header")
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    if (open == true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <div className='navbar'>
      <div className='hide-nav-desktop'>
        <div className='row row-menu'>
          {pages.map(navLinks)}
        </div>
      </div>
      <button className='buttonNavbar hide-nav-burger' onClick={handleOpenMenu}><img className='img-burger' src='img/MenuBurger.png' />
        <div>
          {
            open ? <div className='col col-menu'>
              {pages.map(navLinks)}
            </div> : null
          }
        </div>
      </button>
      <img className='img-user' src="/img/usuario.png" alt="logo" />
      <img className='img-user' src="/img/usuario.png" alt="avatar" />
    </div>
  )
}
