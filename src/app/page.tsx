"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import DummyDrink from "@assets/svgs/dummy_drink.svg";
import DummySandwich from "@assets/svgs/dummy_sandwich.svg";
import DarkChoco from "@assets/svgs/products/darkchoco.svg";
import Mocha from "@assets/svgs/products/mocha.svg";
import WhiteChoco from "@assets/svgs/products/whitechoco.svg";
import Ham from "@assets/svgs/products/ham.svg";
import Bacon from "@assets/svgs/products/bacon.svg";

import Button from '@components/Button';

const GRIND_AND_BLEND_MESSENGER_URL = "https://www.messenger.com/t/103865975799079";

export default function Home() {
  return (
    <StyledMain>
      <FrappeSection>
        <h1>Taste The Difference</h1>
        <Content>
          <Image src={DummyDrink} priority alt="Frappe Drink" />
          <FeaturedDrinks>
            <SubTexts>
              <p>We believe that great coffee starts with great ingredients. </p>
              <p>That&apos;s why we use only the finest, locally sourced beans and fresh, natural ingredients in every drink we make.</p>
            </SubTexts>

            <Card tranparent>
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
              <Button>
                <Link href={GRIND_AND_BLEND_MESSENGER_URL} target='_blank'>Order now!</Link>
              </Button>
            </Card>
          </FeaturedDrinks>
        </Content>
      </FrappeSection>
      <EggdropSection>
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
            <Button>
              <Link href={GRIND_AND_BLEND_MESSENGER_URL} target='_blank'>Order now!</Link>
            </Button>
          </Card>
          <Image src={DummySandwich} priority alt="Eggdrop" />
        </SandwichContainer>
      </EggdropSection>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 146px 0 0 0;

  h1 {
    font-size: 100px;
    margin: 0 auto 38px auto;
    max-width: 1200px;
  }
`

const FrappeSection = styled.section`
  padding: 0 6dvw 38px 6dvw;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-bottom: 54px;
  gap: 54px;
  margin: 0 auto;
  max-width: 1200px;

  img {
    align-self: end;
  }
`
const FeaturedDrinks = styled.div`
  max-width: 879px;
`

const SubTexts = styled.div`
  text-align: center;
  margin-bottom: 71px;
`

interface CardProps {
  tranparent?: boolean;
}

const Card = styled.div<CardProps>`
  display: grid;
  background-color: ${props => props.tranparent ? "rgba(217, 217, 217, 0.2)" : "#F7F7F7"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 30px;

  button {
    margin: 53px auto 23px auto;
  }
`

const Drinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
`

const Drink = styled.div`
  h6 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
`

const EggdropSection = styled.section`
  background-color: #F5DEB3;
  padding: 54px 6dvw 54px 6dvw;

  h2 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 8px;
  }

  p {
    font-size: 24px;
    text-align: center;
  }
`

const SandwichContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0 auto;
  max-width: 1200px;
  gap: 122px;

  margin-top: 100px;

  button {
    align-self: center;
  }
`

const Sandwiches = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 38px;
`

const Sandwich = styled.div`
  h6 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
`