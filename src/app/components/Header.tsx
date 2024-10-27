import React from 'react'
import Link from 'next/link';
import styles from './Header.module.css';


const Header = () => {
      return (

        <header className={styles.header}>
<div >
    <h1 className={styles.title}>
   Hi, Welcome To My Website <br />I Am a Graphic Designer By Profession</h1>
<nav> 
<ul className={styles.navList}>
    <li className={styles.navItem}><Link href="/" className={styles.link} target='block'>Home</Link> </li>
    <li className={styles.navItem}><Link href="/" className={styles.link} target='block'>About</Link> </li>
    <li className={styles.navItem}><Link href="/" className={styles.link} target='block'>Services</Link> </li>
    <li className={styles.navItem}><Link href="/" className={styles.link} target='block'>Contact</Link> </li>
</ul>
</nav>
    </div>
</header>
      );

      };

      export default Header;

