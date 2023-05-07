"use client";
import { useState } from 'react';
import { useScroll, motion, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames/bind';

import Logo from '@assets/svgs/logo.svg';
import Burger from '@assets/svgs/burger.svg';
import ROUTES from '@constants/routes';
import styles from "./navbar.module.scss";

const NAV_ROUTES = [
    { ...ROUTES.MENU },
    { ...ROUTES.ORDER_ONLINE },
    { ...ROUTES.REWARDS },
    { ...ROUTES.LOCATIONS },
    { ...ROUTES.REACH_US }
]


const cx = classnames.bind(styles);

const NavBar = () => {
    const { scrollYProgress } = useScroll()
    const backgroundColor = useTransform(scrollYProgress, [0, 0.1, 1], ['rgba(245, 222, 179,0)', 'rgba(245, 222, 179,0.8)', 'rgba(245, 222, 179,1)'])
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOverlayClick = () => {
        setIsMenuOpen(false);
    }

    const handleBurgerClick = () => {
        setIsMenuOpen(true);
    }

    const overlayClass = cx(styles.overlay, { isMenuOpen })
    const mobileNavMenuClass = cx(styles.mobile_nav_menu, { isMenuOpen })

    return (
        <motion.nav style={{ backgroundColor }} className={styles.navbar}>
            <div className={styles.desktop_nav_menu}>
                {
                    NAV_ROUTES.map((route, index) => (
                        <div className={styles.desktop_nav_menu_item} key={route.NAME + index} >
                            <Link href={route.PATH}>
                                {route.NAME}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className={styles.burger_menu}>
                <Image src={Burger} alt="Burger Menu" onClick={handleBurgerClick} />
                <div className={overlayClass} onClick={handleOverlayClick} />
                <div className={mobileNavMenuClass}>
                    {
                        NAV_ROUTES.map((route, index) => (
                            <div className={styles.mobile_nav_menu_item} key={route.NAME + index}>
                                <Link href={route.PATH}>
                                    {route.NAME}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Link href={ROUTES.HOME.PATH} className={styles.home_logo}>
                <Image priority src={Logo} alt="Grind and Blend Logo" />
                <h1>Grind & Blend</h1>
            </Link>
        </motion.nav>
    )
}

export default NavBar;