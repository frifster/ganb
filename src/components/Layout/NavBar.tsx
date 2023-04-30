"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@assets/svgs/logo.svg';
import ROUTES from '@constants/routes';

type Props = {}

const NAV_ROUTES = [
    { ...ROUTES.MENU },
    { ...ROUTES.ORDER_ONLINE },
    { ...ROUTES.REWARDS },
    { ...ROUTES.LOCATIONS },
    { ...ROUTES.REACH_US }
]


const NavBar = (props: Props) => {

    return (
        <StyledNavBar>
            <Link href={ROUTES.HOME.PATH} className='home-logo'>
                <Image priority src={Logo} alt="Grind and Blend Logo" />
                <h1>Grind & Blend</h1>
            </Link>


            <NavMenu>
                {
                    NAV_ROUTES.map((route, index) => (
                        <NavMenuItem key={route.NAME + index}>
                            <Link href={route.PATH}>
                                {route.NAME}
                            </Link>
                        </NavMenuItem>
                    ))
                }
            </NavMenu>

        </StyledNavBar>
    )
}


const StyledNavBar = styled.nav`
    position: fixed;
    display: grid;
    background-color: var(--secondary-color);
    width: 100%;
    height: 91px;
    padding: 25px 6dvw;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(var(--accent-color-rgb), 0.45);

    a.home-logo {
        display: flex;
        position: relative;
        img {
            align-self: center;
        }
        h1 {
            font-size: 32px;
            letter-spacing: 1px;
            color: var(--accent-color);
            margin-left: 10px;
            white-space: nowrap;
            font-weight: 700;
        }
    }
`

const NavMenu = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 31px;
`

const NavMenuItem = styled.div`
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--accent-color);
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
            background-color: var(--accent-color);
            border-radius: 99px;
        }
    }
`

export default NavBar