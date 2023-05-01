"use client";
import styled from "@emotion/styled"

interface ContainerProps {
    children: React.ReactNode
}
const LayoutContainer = (props: ContainerProps) => {
    return (
        <StyledDiv>{props.children}</StyledDiv>
    )
}
const StyledDiv = styled.div({
    minHeight: '94dvh',
})
export default LayoutContainer