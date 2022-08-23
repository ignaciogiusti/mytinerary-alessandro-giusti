import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom';

const navLinks = (page) =>  <LinkRouter className='' to={page.to}>{page.name}Cities</LinkRouter>

export default function Header() {
  return (
    <>
        <div className='navbar'>
        <LinkRouter className='text-light links' to='/'>Home</LinkRouter>
        <LinkRouter className='text-light links' to='/'>Cities</LinkRouter>
            {/* { pages.map(navLinks) } */}
        </div>
    </>
  )
}
