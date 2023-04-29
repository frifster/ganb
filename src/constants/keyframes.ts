import { keyframes } from "@emotion/react";

export const pulse = keyframes`
    0% {
        transform: translateY(2px);
    }

    50% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(2px);
    }
`;
