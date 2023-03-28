import React from 'react'
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"


const Navbar = () => {
  return (
    <section id="nav">
        <article>
            <div className='Logo'><Logo/></div>
            <div className='Menu'><Menu/></div>
            <div className='Btn'>< Button/></div>
        </article>
    </section>
  )
}

export default Navbar
