import '../styles/Header.css'
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  {name: 'Home', to: '/'},
]
const pageCities = [
  {name: 'Cities', to: '/cities'},
]
const pageNewCity = [
  {name: 'NewCity', to: '/newcity'}
]

const navLinks = (page) =>  <LinkRouter className='navbar-links' to={page.to} key={page.name}>{page.name}</LinkRouter>


export default function Header() {

  console.log("header")
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    if (open == true){
      setOpen(false)
  } else {
    setOpen(true)
}
}

  return (
    <div className='navbar'>
      <img className='img-user' src="/img/usuario.png" alt=""/>
            <div>
              <button className='buttonNavbar' onClick={handleOpenMenu}>Pages</button>
            </div>
        <div>
          {
            open
            ? <ul>
                      <li><a href="#">{ pages.map(navLinks) }</a></li>
                      <li><a href="#">{ pageCities.map(navLinks) }</a></li>
                      <li><a href="#">{ pageNewCity.map(navLinks) }</a></li>
                      {/* <li><a href="#">Login</a></li> */}
                  </ul>
                  : null
          }
        </div>
        <div className='justify-start'>
          <img className='img-user' src="/img/usuario.png" alt=""/>
          {/* { pages.map(navLinks) } */}
        </div>
    </div>
  )
}

  // return (
  //   <>
  //       <div className='navbar'>
  //         <div className='justify-start'>
          // <img className='img-user' src="/img/usuario.png" alt=""/>
  //           { pages.map(navLinks) }
  //         </div>
  //           <div>
  //           <img className='img-user' src="/img/usuario.png" alt=""/>
  //           </div>
  //       </div>
  //   </>
  // )
