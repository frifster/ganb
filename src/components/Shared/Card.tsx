"use client";
import styled from '@emotion/styled';
import { motion } from "framer-motion";

interface CardProps {
  tranparent?: boolean;
}

const Card = styled(motion.div) <CardProps>`
    display: grid;
    background-color: ${props => props.tranparent ? "rgba(217, 217, 217, 0.2)" : "#F7F7F7"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px;
  `

export default Card;