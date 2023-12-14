import styles from "./Navbar.module.css";
import Link from "next/link";

import React, { useState, useEffect } from "react";

const Navbar = () => {

    // NAVBAR RESPONSIVE
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };
    const closeNavbar = () => {
        window.innerWidth < 768 && setIsExpanded(!isExpanded);
    }

    // Add an event listener to check the window width on resize
    useEffect(() => {
        const handleResize = () => {
            console.log('resize');
            setIsExpanded(window.innerWidth >= 768); // Adjust the value based on your desired tab size
        };

        // Initial check
        handleResize();

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollDown = () => {
        document.getElementById("menu").scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            {isExpanded ? (<>
                <div className={styles.first}>
                    <p onClick={closeNavbar}><Link href="/" >HOME</Link></p>
                    <p onClick={closeNavbar}><Link href="/about" >ABOUT US</Link></p>
                    <p onClick={closeNavbar}><Link href="/contact" >CONTACT US</Link></p>
                </div>
                <div className={styles.second}>
                    <img className={styles.logo} src="/logo.jpg" alt="logo" height={30} width={30} />
                </div>
                <div className={styles.third}>
                    <p onClick={closeNavbar}><Link href="/gallery" >GALLERY</Link></p>
                    <p onClick={closeNavbar}><Link href="/merchandise" >MERCHANDISE</Link></p>
                    <p onClick={closeNavbar}><Link href="/donation" >DONATION</Link></p>
                </div>
            </>) : (
                <div className={styles.logoOnly}>
                    <img src={"/logo.jpg"} alt="logo" />
                </div>
            )}

            {typeof window !== 'undefined' && window.innerWidth < 768 && (
                <button onClick={toggleNavbar} className={styles.toggleButton}>
                    <img src={isExpanded ? "/icons8-close.svg" : "/icons8-menu.svg"} alt="expand bars" />

                </button>
            )}


        </div>
    );
};

export default Navbar;
