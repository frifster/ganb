"use client";

import styled from '@emotion/styled';
import MQ from "@constants/media_queries";
import { pulse } from '@constants/keyframes';

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 9999px;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    transition: all 0.2s ease-in-out;

    &:focus,
    &:hover {
        color: rgba(255, 0, 0, 0.8);
        
    }

    &:active {
        animation: ${pulse} 500ms ease;
    }

    ${MQ[0]} {
        color: blue;
    }

    ${MQ[1]} {
        color: green;
    }

    ${MQ[2]} {
        color: orange;
    }

    ${MQ[3]} {
        color: pink;
    }

    ${MQ[4]} {
        color: black;
    }
`;

export default Button;