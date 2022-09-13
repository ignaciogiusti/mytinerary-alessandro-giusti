import '../styles/Header.css'
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import MyTinerary from '../pages/MyTinerary';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'NewCity', to: '/newcity' },
  { name: 'EditCity', to: '/editcity'},
  { name: 'MyTinerary', to: '/mytinerary/auth/63126f9234a07b3e776c0684'},
]

const register = [
  { name: 'Sign In', to:'/'},
  { name: 'Sign Up', to:'/auth/signup'}
]

const navLinks = (page) => <LinkRouter className='navbar-links menu-hover' to={page.to} key={page.name}>{page.name}</LinkRouter>
const signLinks = (page) => <LinkRouter className='navbar-links menu-hover' to={page.to} key={page.name}>{page.name}</LinkRouter>


export default function Header() {

  const [open, setOpen] = useState(false)
  const [openSign, setOpenSign] = useState(false)

  const handleOpenMenu = () => {
    if (open == true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const handleOpenMenuSign = () => {
    if (openSign == true) {
      setOpenSign(false)
    } else {
      setOpenSign(true)
    }
  }

  return (
    <div className='navbar'>
      <button className='buttonNavbar hide-nav-burger' onClick={handleOpenMenu}><img className='img-burger' src='img/MenuBurger.png' />
        <div>
          {
            open ? <div className='col col-menu'>
              {pages.map(navLinks)}
            </div> : null
          }
        </div>
      </button>
      <LinkRouter  to='/'><img className='img-header' src="/img/logo.png" alt="logo" /></LinkRouter>
      <div className='hide-nav-desktop'>
        <div className='row row-menu'>
          {pages.map(navLinks)}
        </div>
      </div>
      <button className='buttonNavbar' onClick={handleOpenMenuSign}><img className='img-header' src="/img/usuario.png" alt="avatar" />
      <div>
          {
            openSign ? <div className='col col-menu'>
              {register.map(signLinks)}
            </div> : null
          }
        </div>
      </button>
    </div>
  )
}
