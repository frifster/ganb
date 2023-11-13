"use client";
import MenuImg from "@assets/images/newmenu.png";
import Image from "next/image";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Image src={MenuImg} alt="Grind and Blend Menu" />
    </div>
  );
};

export default Menu;