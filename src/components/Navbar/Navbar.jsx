import React,{useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/logo.png'
import { getImageUrl } from '../../utils'

function Navbar() {
    const[menuOpen,setmenuOpen] =useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/"><img src={logo} alt="" /></a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen?getImageUrl('nav/closeIcon.png')
            :getImageUrl('nav/menuIcon.png')} 
            onClick={() =>setmenuOpen(!menuOpen)}
            alt="menu-button" />
            <ul className={`${styles.menuItem} ${menuOpen&&styles.menuOpen}`}
             onClick={()=>setmenuOpen(false)}>
                <li>
                    <a href="#top">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skill</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
