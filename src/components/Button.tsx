"use client";

import styled from '@emotion/styled';
import { pulse } from '@constants/keyframes';
// import MQ from "@constants/media_queries";


const Button = styled.button`
    background-color: var(--accent-color-2);
    border-radius: 9999px;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    width: 100%;
    max-width: 333px;
    text-transform: uppercase;

    &:hover {
        background-color: var(--accent-color);
        color: var(--secondary-color);
    }

    &:active {
        animation: ${pulse} 500ms ease;
    }
`;

export default Button;