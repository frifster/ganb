"use client";

import styled from '@emotion/styled';

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

`;

export default Button;