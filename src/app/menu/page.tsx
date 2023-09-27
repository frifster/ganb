"use client";
import HotMenuImg from "@assets/images/hotmenu.png";
import MatchaImg from "@assets/images/matcha.png";
import MenuImg from "@assets/images/menu.png";
import PerfectComboImg from "@assets/images/perfectcombo.png";
import SuperComboImg from "@assets/images/supercombo.jpg";
import Image from "next/image";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Image src={MenuImg} alt="Grind and Blend Menu" />
      <Image src={HotMenuImg} alt="Grind and Blend Hot Menu" />
      <Image src={MatchaImg} alt="Grind and Blend Matcha" />
      <Image src={PerfectComboImg} alt="Grind and Blend Perfect Combo" />
      <Image src={SuperComboImg} alt="Grind and Blend Super Combo" />
    </div>
  );
};

export default Menu;