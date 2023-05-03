"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, motion, useTransform } from "framer-motion";

import DummyDrink from "@assets/svgs/dummy_drink.svg";
import DarkChoco from "@assets/svgs/products/darkchoco.svg";
import Mocha from "@assets/svgs/products/mocha.svg";
import WhiteChoco from "@assets/svgs/products/whitechoco.svg";

import Button from '@components/Shared/Button';
import Card from '@components/Shared/Card';
import { orderLinkStyles, productNameStyles } from '@constants/styles';
import MQ from '@constants/media_queries';

const GRIND_AND_BLEND_MESSENGER_URL = "https://www.messenger.com/t/103865975799079";

const FrappeSection = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['rgba(245, 222, 179,0)', 'rgba(245, 222, 179,1)'])
  return (
    <StyledSection style={{ backgroundColor }}>
      <motion.div style={{ opacity }}>
        <h1>Taste The Difference</h1>
        <Content>
          <Image src={DummyDrink} priority alt="Frappe Drink" className="main-img" />
          <FeaturedDrinks>
            <SubTexts>
              <p>We believe that great coffee starts with great ingredients. </p>
              <p>That&apos;s why we use only the finest, locally sourced beans and fresh, natural ingredients in every drink we make.</p>
            </SubTexts>

            <Card >
              <Drinks>
                <Drink>
                  <Image src={DarkChoco} priority alt="Dark Choco Frappe" />
                  <h6>Dark Choco</h6>
                </Drink>
                <Drink>
                  <Image src={Mocha} priority alt="Dark Choco Frappe" />
                  <h6>Mocha</h6>
                </Drink>
                <Drink>
                  <Image src={WhiteChoco} priority alt="Dark Choco Frappe" />
                  <h6>White Choco</h6>
                </Drink>
              </Drinks>

              <Link href={GRIND_AND_BLEND_MESSENGER_URL} target='_blank' className='order-link'><Button>Order now!</Button></Link>

            </Card>
          </FeaturedDrinks>
        </Content>
      </motion.div>
    </StyledSection>
  )
}

const StyledSection = styled(motion.section)({
  position: 'relative',
  padding: '0 6dvw 38px 6dvw',
  h1: {
    fontSize: "clamp(60px, 4rem,80px)",
    margin: '0 auto 38px auto',
    maxWidth: '1200px'
  },

  [MQ[5]]: {
    h1: {
      textAlign: 'center',
      fontSize: 'clamp(40px, 4rem, 60px)',
    }
  },

  [MQ[6]]: {
    h1: {
      fontSize: 'clamp(30px, 3rem, 50px)',
    }
  }
})


const Content = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  paddingBottom: '54px',
  gap: '54px',
  margin: '0 auto',
  width: '100%',
  maxWidth: '1200px',
  img: {
    alignSelf: 'end'
  },

  [MQ[5]]: {
    gridTemplateColumns: 'auto',
    ".main-img": {
      display: 'none'
    }
  }
})

const FeaturedDrinks = styled.div({
  maxWidth: "879px",
  ".order-link": orderLinkStyles
})

const SubTexts = styled.div({
  textAlign: "center",
  marginBottom: "71px"
})

const Drinks = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '38px',

  [MQ[6]]: {
    gridTemplateColumns: '1fr',
  }
})

const Drink = styled.div({
  h6: productNameStyles,
  [MQ[6]]: {
    justifySelf: 'center'
  }
})

export default FrappeSection