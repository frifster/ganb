"use client";
import styled from '@emotion/styled';

import FrappeSection from './FrappeSection';
import EggdropSection from './EggdropSection';

export default function Home() {
  return (
    <StyledMain>
      <FrappeSection />
      <EggdropSection />
    </StyledMain>
  )
}

const StyledMain = styled.main({
  padding: "120px 0 0 0"
})
