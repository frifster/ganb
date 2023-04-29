"use client";

import styled from '@emotion/styled';
import MQ from "@constants/media_queries";

const Button = styled.button`

    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4px;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #000;
        color: #fff;
    }

    &:focus {
        outline: 1px solid red;
    }

    ${MQ[0]} {
        font-size: 1.5rem;
        color: blue;
    }

    ${MQ[1]} {
        font-size: 2rem;
        color: red;
    }

    ${MQ[2]} {
        font-size: 2rem;
        color: yellow;
    }

    ${MQ[3]} {
        font-size: 2rem;
        color: pink;
    }

    ${MQ[4]} {
        font-size: 2rem;
        color: black;
    }
`;

export default Button;