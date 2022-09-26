import '../styles/Header.css'
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import MyTinerary from '../pages/MyTinerary';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' }
]

const userPages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'MyTinerary', to: `/mytinerary/auth/` },
]

const adminPages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'NewCity', to: '/newcity' },
  { name: 'EditCity', to: '/editcity' },
  { name: 'MyTinerary', to: `/mytinerary/auth/` },
]

const register = [
  { name: 'Sign In', to: '/auth/signin' },
  { name: 'Sign Up', to: '/auth/signup' }
]

const userName = JSON.parse(localStorage.getItem('user'))?.name
const userPhoto = JSON.parse(localStorage.getItem('user'))?.photo

const userLogged = [
  { name: userName, to: '/auth/profile' },
  { name: 'Sign Out', to: '/auth/signin' }
]
console.log(userName)

const navLinks = (page) => <LinkRouter className='navbar-links menu-hover' to={page.to} key={page.name}>{page.name}</LinkRouter>

const signLinks = (page) => <LinkRouter className='navbar-links avatar-links' to={page.to} key={page.name}>{page.name}</LinkRouter>


export default function Header() {
  const [open, setOpen] = useState(false)
  const [openSign, setOpenSign] = useState(false)
  const [logged, setLogged] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [user, setUser] = useState(false)

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

  console.log(userName)

  useEffect(() => {
    console.log("useeffect???'")
    JSON.parse(localStorage.getItem('user')) && setLogged(true)
    JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true)
    JSON.parse(localStorage.getItem('user'))?.role==='user' && setUser(true)
  }, [])

  return ( admin? (
    <>
      <div className='navbar'>
        <button className='buttonNavbar hide-nav-burger' onClick={handleOpenMenu}><img className='img-burger' src='img/MenuBurger.png' />
          <div>
            {
              open ? <div className='col col-menu'>
                {adminPages.map(navLinks)}
              </div> : null
            }
          </div>
        </button>
        <div className='Logo-Center-Desktop'><LinkRouter to='/'><img className='img-header' src="/img/logo.png" alt="logo" /></LinkRouter></div>
        <div className='hide-nav-desktop'>
          <div className='row row-menu'>
            {adminPages.map(navLinks)}
          </div>
        </div>
        <div className='User-Avatar'>
          <button className='buttonNavbar' onClick={handleOpenMenuSign}>
            {logged ? <img className='img-avatar' src={userPhoto} alt="avatar" /> : <img className='img-avatar' src="/img/usuario.png" alt="avatar" />}
            {
              openSign ? <div className='user-menu'>
                {logged ? userLogged.map(signLinks) : register.map(signLinks)}
              </div> : null
            }
          </button>
        </div>
      </div>
    </>
  ) : logged? (
    <>
      <div className='navbar'>
        <button className='buttonNavbar hide-nav-burger' onClick={handleOpenMenu}><img className='img-burger' src='img/MenuBurger.png' />
          <div>
            {
              open ? <div className='col col-menu'>
                {userPages.map(navLinks)}
              </div> : null
            }
          </div>
        </button>
        <div className='Logo-Center-Desktop'><LinkRouter to='/'><img className='img-header' src="/img/logo.png" alt="logo" /></LinkRouter></div>
        <div className='hide-nav-desktop'>
          <div className='row row-menu'>
            {userPages.map(navLinks)}
          </div>
        </div>
        <div className='User-Avatar'>
          <button className='buttonNavbar' onClick={handleOpenMenuSign}>
            {logged ? <img className='img-avatar' src={userPhoto} alt="avatar" /> : <img className='img-avatar' src="/img/usuario.png" alt="avatar" />}
            {
              openSign ? <div className='user-menu'>
                {logged ? userLogged.map(signLinks) : register.map(signLinks)}
              </div> : null
            }
          </button>
        </div>
      </div>
    </>
  ) : (<>
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
      <div className='Logo-Center-Desktop'><LinkRouter to='/'><img className='img-header' src="/img/logo.png" alt="logo" /></LinkRouter></div>
      <div className='hide-nav-desktop'>
        <div className='row row-menu'>
          {pages.map(navLinks)}
        </div>
      </div>
      <div className='User-Avatar'>
        <button className='buttonNavbar' onClick={handleOpenMenuSign}>
          {logged ? <img className='img-avatar' src={userPhoto} alt="avatar" /> : <img className='img-avatar' src="/img/usuario.png" alt="avatar" />}
          {
            openSign ? <div className='user-menu'>
              {logged ? userLogged.map(signLinks) : register.map(signLinks)}
            </div> : null
          }
        </button>
      </div>
    </div>
  </>))
}
