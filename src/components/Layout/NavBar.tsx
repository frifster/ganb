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
            <Link href={ROUTES.HOME.PATH}>
                <Image priority src={Logo} alt="Grind and Blend Logo" />
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
    display: grid;
    background-color: var(--secondary-color);
    width: 100dvw;
    height: 91px;
    padding: 25px 6dvw;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(var(--accent-color-rgb), 0.45);

    img {
        align-self: center;
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