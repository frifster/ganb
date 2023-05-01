"use client";
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

import DummySandwich from "@assets/svgs/dummy_sandwich.svg";
import Ham from "@assets/svgs/products/ham.svg";
import Bacon from "@assets/svgs/products/bacon.svg";

import Button from '@components/Shared/Button';
import Card from '@components/Shared/Card';

const GRIND_AND_BLEND_MESSENGER_URL = "https://www.messenger.com/t/103865975799079";

const EggdropSection = () => {
    return (
        <StyledSection>
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
        </StyledSection>
    )
}

const StyledSection = styled.section`
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

export default EggdropSection