"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import DummyDrink from "@assets/svgs/dummy_drink.svg";
import DarkChoco from "@assets/svgs/products/darkchoco.svg";
import Mocha from "@assets/svgs/products/mocha.svg";
import WhiteChoco from "@assets/svgs/products/whitechoco.svg";

import Button from '@components/Shared/Button';
import Card from '@components/Shared/Card';

const GRIND_AND_BLEND_MESSENGER_URL = "https://www.messenger.com/t/103865975799079";

const FrappeSection = () => {
    return (
        <StyledSection>
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
        </StyledSection>
    )
}

const StyledSection = styled.section`
  padding: 0 6dvw 38px 6dvw;
  h1 {
    font-size: 100px;
    margin: 0 auto 38px auto;
    max-width: 1200px;
  }
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

export default FrappeSection