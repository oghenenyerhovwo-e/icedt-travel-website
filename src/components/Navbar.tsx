"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch } from 'react-icons/fi'; 
import { FaAngleDown, FaRegBookmark, FaBars, FaTimes } from 'react-icons/fa'

import { profilePic } from "@/assets"
import styles from "./navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/"><h3>Travelsy</h3></Link>
        </div>

        

        {/* Nav Actions (for larger screens) */}
        <div className={styles.navActions}>
          <nav className={styles.navLinks}>
            <Link href="/">Camping Locations</Link>
            <Link href="/">Activities</Link>
            <Link href="/">Equipment</Link>
            <Link href="/">Blogs</Link>
          </nav>
          <div className={styles.navButtons}>
            <Link href="#">
              <button>
                <FaRegBookmark />
                <span>Reservation</span>
              </button>
            </Link>
            <div className={styles.searchButton}>
              <FiSearch />
            </div>
            <div className={styles.profilePic}>
              <Image src={profilePic} alt="profile" />
              <span className={styles.profilePicIcon}><FaAngleDown /></span>
            </div>
            </div>
            {/* Hamburger for mobile */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>

        
      </div>

      {/* Dropdown for smaller screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/">Camping Locations</Link>
            <Link href="/">Activities</Link>
            <Link href="/">Equipment</Link>
            <Link href="/">Blogs</Link>
            <Link href="#">
              <button style={{ display: "flex", cursor: "pointer", alignItems: "center", gap: "0.5rem", background: "var(--clr-primary)", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", border: "none" }}>
                <FaRegBookmark />
                <span>Reservation</span>
              </button>
            </Link>
            <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <div>
                <FiSearch />
              </div>
              <div className={styles.profilePic}>
                <Image src={profilePic} alt="profile" />
                <span className={styles.profilePicIcon}><FaAngleDown /></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
