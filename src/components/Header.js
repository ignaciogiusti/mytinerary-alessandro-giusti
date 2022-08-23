import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  {name: 'Home', to: '/'},
  {name: 'Cities', to: '/cities'},
  {name: 'NewCity', to: '/newcity'}
]

const navLinks = (page) =>  <LinkRouter className='navbar-links' to={page.to}>{page.name}</LinkRouter>

export default function Header() {
  return (
    <>
        <div className='navbar'>
          <div className='justify-start'>
          <img className='img-user' src="/img/usuario.png" alt=""/>
            { pages.map(navLinks) }
          </div>
            <div>
            <img className='img-user' src="/img/usuario.png" alt=""/>
            </div>
        </div>
    </>
  )
}
