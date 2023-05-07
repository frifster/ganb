"use client";
import { ReactNode } from 'react';
import { motion } from "framer-motion";
import styles from './card.module.scss';

interface CardProps {
    tranparent?: boolean;
    children: ReactNode;
}

function Card(props: CardProps) {
    return (
        <motion.div className={styles.card}>
            {props.children}
        </motion.div>
    )
}

export default Card;