// Footer.js

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.firstChild}>
                <div className={styles.leftCol}>
                    <h1>SABUJ SANGAM 2.0 20<span>23</span></h1>
                    <p>SABUJ SANGAM 2.0
                        , the Re-Union of C.M.S Hign School, brings all alumni students. It offers alumni a chance to relive their college memories.</p>
                </div>
                <div className={styles.rightCol}>
                    <div className={styles.leftList}>
                        <ul>
                            <li><Link href="about">About us</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/gallery">Memories</Link></li>
                            <li><Link href="/merchandise">Merchandise</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightList}>
                        <ul>
                            <li><Link href="/">Venue</Link></li>
                            <li><Link href="/">Events</Link></li>
                            <li><Link href="/gallery">Galleries</Link></li>
                            <li><Link href="/donation">Donation</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>





            <div className={styles.contact_section}>
                <p>Contact with us on:</p>
                <div className={styles.social_icons}>
                    <Link href="https://facebook.com"><img src={"/facebook.svg"} alt="Facebook" className={styles.img} /></Link>
                    <Link href="https://instagram.com"><img src={"/instagram.svg"} alt="instagram" className={styles.img} /></Link>
                    <Link href="https://youtube.com"><img src={"/youtube.svg"} alt="youtube" className={styles.img} /></Link>
                    <Link href="https://linkedin.com"><img src={"/linkedin.svg"} alt="linkedin" className={styles.img} /></Link>

                </div>
            </div>


            <br />



        </div>
    );
};

export default Footer;
