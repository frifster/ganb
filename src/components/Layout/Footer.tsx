"use client";
import ROUTES from '@constants/routes';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import FB from '@assets/svgs/socials/fb.svg';
import Instagram from '@assets/svgs/socials/instagram.svg';
import TikTok from '@assets/svgs/socials/tiktok.svg';

type Props = {}

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
        <StyledFooter>
            <Socials>
                <Link href={FB_LINK} target='_blank'>
                    <Image src={FB} alt="Link to facebook page" />
                </Link>
                <Link href={INSTAGRAM_LINK} target='_blank'>

                    <Image src={Instagram} alt="Link to instagram page" />
                </Link>
                <Link href={TIKTOK_LINK} target='_blank'>
                    <Image src={TikTok} alt="Link to tiktok page" />
                </Link>
            </Socials>
            <FooterMenu>
                {
                    FOOTER_ROUTES.map((route, index) => (
                        <FooterMenuItem key={route.NAME + index}>
                            <Link href={route.PATH}>
                                {route.NAME}
                            </Link>
                        </FooterMenuItem>
                    ))
                }
            </FooterMenu>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer({
    backgroundColor: 'var(--accent-color)',
    width: '100%',
    height: "clamp(60px, 6dvh, 91px)",
    padding: '0 6dvw',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
    boxShadow: '0px -4px 4px rgba(var(--accent-color-rgb), 0.45)',
    display: 'grid'

})

const Socials = styled.div({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '2dvw',
    maxWidth: '200px',
    cursor: 'pointer',
    alignContent: 'center',
    justifyItems: 'center',
    alignSelf: 'center'
})

const FooterMenu = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 31px;
`

const FooterMenuItem = styled.div`
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--secondary-color);
    position: relative;
    white-space: nowrap;

    &:hover {
        &:after {
            content: '';
            position: absolute;
            display: block;
            width: 80%;
            left: 10%;
            height: 4px;
            margin: 0 auto;
            background-color: var(--secondary-color);
            border-radius: 99px;
        }
    }
`

export default Footer