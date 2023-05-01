"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import ConstructionImg from "@assets/images/underconstruction.png"

export default function NotFound() {
    return (
        <Container>
            <div>
                <Image src={ConstructionImg} alt="404" />
                <h2>This page is currently under construction.</h2>
                <p>Sorry for the inconvenience</p>
            </div>
        </Container>
    );
}


const Container = styled.div({
    padding: '0 6dvw',
    display: 'grid',
    placeItems: 'center',
    minHeight: "94vh",
    textAlign: 'center',
    color: "gray",

    h2: {
        fontWeight: 700,
    }
});