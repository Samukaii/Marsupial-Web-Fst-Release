import styled from "styled-components";
import { Colors } from "../../global/colors";
import { Background as BG } from "../../global/styles";

export const Background = styled(BG)`
    background-color: ${Colors.sideBar};
    width: 100%;
    justify-content: unset;
    align-items: unset;
    z-index: -1;
    overflow-x: hidden;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    height: 80%;
    overflow-y: auto;
`;

export * from "./sideBar";
export * from "./baseContainer";
