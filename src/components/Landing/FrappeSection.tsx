"use client";
import DummyDrink from "@assets/svgs/dummy_drink.svg";
import DarkChoco from "@assets/svgs/products/darkchoco.svg";
import Mocha from "@assets/svgs/products/mocha.svg";
import WhiteChoco from "@assets/svgs/products/whitechoco.svg";

import Button from "@components/Shared/Button";
import Card from "@components/Shared/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GRIND_AND_BLEND_MESSENGER_URL =
  process.env.NEXT_PUBLIC_GRIND_AND_BLEND_MESSENGER_URL || "";

const FrappeSection = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["rgba(245, 222, 179,0)", "rgba(245, 222, 179,1)"]);
  return (
    <motion.section
      className="grid content-center h-screen "
      style={{ backgroundColor }}
    >
      <h1 className="w-full text-7xl text-center">Taste The Difference</h1>
      <div className="grid grid-cols-4 gap-12 pb-12 mt-5 mx-auto max-w-7xl w-100">
        <Image src={DummyDrink} priority alt="Frappe Drink" className="col-end-1" />
        <div className="max-w-4xl col-span-full grid">
          <div className="text-center mb-7">
            <p>We believe that great coffee starts with great ingredients. </p>
            <p>That&apos;s why we use only the finest, locally sourced beans and fresh, natural ingredients in every
              drink we make.</p>
          </div>

          <Card>
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="text-center text-xl font-bold cursor-pointer">
                <Image src={DarkChoco} priority alt="Dark Choco Frappe" />
                <h6>Dark Choco</h6>
              </div>
              <div className="text-center text-xl font-bold cursor-pointer">
                <Image src={Mocha} priority alt="Dark Choco Frappe" />
                <h6>Mocha</h6>
              </div>
              <div className="text-center text-xl font-bold cursor-pointer">
                <Image src={WhiteChoco} priority alt="Dark Choco Frappe" />
                <h6>White Choco</h6>
              </div>
            </div>

            <Link href={GRIND_AND_BLEND_MESSENGER_URL} target="_blank"
                  className="w-full grid place-items-center">
              <Button>Order now!</Button>
            </Link>

          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default FrappeSection;