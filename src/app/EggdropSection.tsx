"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, motion, useTransform } from "framer-motion";

import DummySandwich from "@assets/svgs/dummy_sandwich.svg";
import Ham from "@assets/svgs/products/ham.svg";
import Bacon from "@assets/svgs/products/bacon.svg";

import Button from '@components/Shared/Button';
import Card from '@components/Shared/Card';
import { orderLinkStyles, productNameStyles } from '@constants/styles';
import MQ from '@constants/media_queries';

const GRIND_AND_BLEND_MESSENGER_URL = "https://www.messenger.com/t/103865975799079";

const EggdropSection = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <StyledSection style={{ opacity }}>
      <h2>Experience Eggdrop Perfection</h2>
      <p>Find out why everyone&apos;s talking about this game-changing dish!</p>
      <SandwichContainer>
        <Card>
          <Sandwiches>
            <Sandwich>
              <Image src={Ham} priority alt="Sandwich 1" />
              <h6>Ham & Egg</h6>
            </Sandwich>
            <Sandwich>
              <Image src={Bacon} priority alt="Sandwich 2" />
              <h6>Bacon & Egg</h6>
            </Sandwich>
          </Sandwiches>

          <Link href={GRIND_AND_BLEND_MESSENGER_URL} target='_blank' className='order-link'> <Button>Order now! </Button></Link>

        </Card>
        <Image src={DummySandwich} priority alt="Eggdrop" className='eggdrop-image' />
      </SandwichContainer>
    </StyledSection>
  )
}

const StyledSection = styled(motion.section)({
  backgroundColor: "#F5DEB3",
  padding: "54px 6dvw 100px 6dvw",

  h2: {
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "8px",
  },

  p: {
    fontSize: "24px",
    textAlign: "center",
  }
})

const SandwichContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  margin: "100px auto 0 auto",
  maxWidth: "1200px",
  gap: "122px",
  ".order-link": orderLinkStyles,

  [MQ[3]]: {
    gridTemplateColumns: "auto",
    ".eggdrop-image": {
      display: "none"
    }
  }
})

const Sandwiches = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "38px",

  [MQ[6]]: {
    gridTemplateColumns: '1fr',
  }
})

const Sandwich = styled.div({
  h6: productNameStyles,
  [MQ[3]]: {
    justifySelf: 'center'
  }
})

export default EggdropSection