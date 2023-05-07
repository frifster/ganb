"use client";
import Image from 'next/image';
import Link from 'next/link';

import DummySandwich from "@assets/svgs/dummy_sandwich.svg";
import Ham from "@assets/svgs/products/ham.svg";
import Bacon from "@assets/svgs/products/bacon.svg";

import Button from '@components/Shared/Button';
import Card from '@components/Shared/Card';
import styles from './landing.module.scss';

const GRIND_AND_BLEND_MESSENGER_URL =
  process.env.NEXT_PUBLIC_GRIND_AND_BLEND_MESSENGER_URL || "";

const EggdropSection = () => {


  return (
    <section className={styles.eggdrop_section}>
      <h2>Experience Eggdrop Perfection</h2>
      <p>Find out why everyone&apos;s talking about this game-changing dish!</p>
      <div className={styles.sandwich_container}>
        <Card>
          <div className={styles.sandwiches}>
            <div className={styles.sandwich}>
              <Image src={Ham} priority alt="Sandwich 1" />
              <h6>Ham & Egg</h6>
            </div>
            <div className={styles.sandwich}>
              <Image src={Bacon} priority alt="Sandwich 2" />
              <h6>Bacon & Egg</h6>
            </div>
          </div>

          <Link href={GRIND_AND_BLEND_MESSENGER_URL} target='_blank' className={styles.order_link}> <Button>Order now!aa </Button></Link>

        </Card>
        <Image src={DummySandwich} priority alt="Eggdrop" className={styles.eggdrop_image} />
      </div>
    </section>
  )
}
export default EggdropSection