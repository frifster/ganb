"use client";

import styled from '@emotion/styled';
import { pulse } from '@constants/keyframes';


const Button = styled.button({
    backgroundColor: 'var(--accent-color-2)',
    borderRadius: '9999px',
    color: 'var(--accent-color)',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.3rem 0.5rem',
    boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.7)',
    width: '100%',
    maxWidth: '300px',
    textTransform: 'uppercase',
    height: '40px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
        backgroundColor: 'var(--accent-color)',
        color: 'var(--secondary-color)',
    },

    '&:active': {
        animation: `${pulse} 300ms ease`,
    }
});

export default Button;