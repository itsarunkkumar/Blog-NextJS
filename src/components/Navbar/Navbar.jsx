"use client"
import React from 'react'
import Link from 'next/link'
import Styles from "./navbar.module.css"
import DarkModeToogle from '../DarkModeToogle/DarkModeToogle';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

function Navbar() {
  return (
    <div className={Styles.container}>
      <Link href="/" className={Styles.logo}>Arun</Link>
      <div className={Styles.links}>
        <DarkModeToogle />
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={Styles.link}>
            {link.title}
          </Link>
        ))}
        <button
        className={Styles.logout}
         onClick={() => {
          console.log('logout');
          
        }}>
          Logout
          </button>
      </div>
    </div>
  )
}

export default Navbar
