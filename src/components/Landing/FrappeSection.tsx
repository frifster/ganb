"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import DummyDrink from "@assets/svgs/dummy_drink.svg";
import DarkChoco from "@assets/svgs/products/darkchoco.svg";
import Mocha from "@assets/svgs/products/mocha.svg";
import WhiteChoco from "@assets/svgs/products/whitechoco.svg";

import Button from "@components/Shared/Button";
import Card from "@components/Shared/Card";
import styles from "./landing.module.scss";

const GRIND_AND_BLEND_MESSENGER_URL =
  process.env.NEXT_PUBLIC_GRIND_AND_BLEND_MESSENGER_URL || "";

const FrappeSection = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["rgba(245, 222, 179,0)", "rgba(245, 222, 179,1)"]);
  return (
    <motion.section className={styles.frappe_section} style={{ backgroundColor }}>
      <h1>Taste The Difference</h1>
      <div className={styles.content}>
        <Image src={DummyDrink} priority alt="Frappe Drink" className={styles.main_image} />
        <div className={styles.featured_drinks}>
          <div className={styles.subtexts}>
            <p>We believe that great coffee starts with great ingredients. </p>
            <p>That&apos;s why we use only the finest, locally sourced beans and fresh, natural ingredients in every
              drink we make.</p>
          </div>

          <Card>
            <div className={styles.drinks}>
              <div className={styles.drink}>
                <Image src={DarkChoco} priority alt="Dark Choco Frappe" />
                <h6>Dark Choco</h6>
              </div>
              <div className={styles.drink}>
                <Image src={Mocha} priority alt="Dark Choco Frappe" />
                <h6>Mocha</h6>
              </div>
              <div className={styles.drink}>
                <Image src={WhiteChoco} priority alt="Dark Choco Frappe" />
                <h6>White Choco</h6>
              </div>
            </div>

            <Link href={GRIND_AND_BLEND_MESSENGER_URL} target="_blank" className={styles.order_link}><Button>Order
              now!</Button></Link>

          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default FrappeSection;