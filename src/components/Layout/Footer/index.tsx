"use client";
import ROUTES from '@constants/routes';
import Image from 'next/image';
import Link from 'next/link';

import FB from '@assets/svgs/socials/fb.svg';
import Instagram from '@assets/svgs/socials/instagram.svg';
import TikTok from '@assets/svgs/socials/tiktok.svg';
import styles from './footer.module.scss';

const FOOTER_ROUTES = [
    { ...ROUTES.ABOUT_US },
    { ...ROUTES.CAREERS },
    { ...ROUTES.FEEDBACK }
]

const FB_LINK = 'https://www.facebook.com/grindandblend';
const INSTAGRAM_LINK = "https://www.instagram.com/grindandblend/";
const TIKTOK_LINK = "https://www.tiktok.com/@grindandblend?lang=en";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link href={FB_LINK} target='_blank'>
                    <Image src={FB} alt="Link to facebook page" />
                </Link>
                <Link href={INSTAGRAM_LINK} target='_blank'>

                    <Image src={Instagram} alt="Link to instagram page" />
                </Link>
                <Link href={TIKTOK_LINK} target='_blank'>
                    <Image src={TikTok} alt="Link to tiktok page" />
                </Link>
            </div>
            <div className={styles.footer_menu}>
                {
                    FOOTER_ROUTES.map((route, index) => (
                        <div className={styles.footer_menu_item} key={route.NAME + index}>
                            <Link href={route.PATH}>
                                {route.NAME}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer