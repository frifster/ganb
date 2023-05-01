"use client";
import styled from "@emotion/styled"
import MQ from '@constants/media_queries';

interface ContainerProps {
    children: React.ReactNode
}
const LayoutContainer = (props: ContainerProps) => {
    return (
        <StyledDiv>{props.children}</StyledDiv>
    )
}
const StyledDiv = styled.div({
    minHeight: '92dvh',

    [MQ[7]]: {
        minHeight: '86dvh',
    },
})
export default LayoutContainer