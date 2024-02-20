'use client'
import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Avatar from '../../assets/avatar.jpeg';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import SideBar from '../SideBar/SideBar';


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <div className={`${styles.navBar} container`}>
      {/* Overlay */}
      <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={handleClose}></div>

      {/* Sidebar */}
      <div className={`${styles.sidebarSlide} ${open ? styles.open : ''}`}>
        <SideBar />
      </div>

      {/* Right section with menu icon */}
      <div className={styles.right}>
        <FaBars onClick={handleOpen} className={styles.barIcon} />
      </div>

      {/* Left section with avatar and name */}
      <div className={styles.left}>
        <Image src={Avatar} alt="" />
        <span>Alex Johnson</span>
      </div>
    </div>
  );
};

export default NavBar;
