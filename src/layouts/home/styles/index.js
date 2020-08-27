import styled from "styled-components";
import { Colors } from "../../global/colors";
import { Common } from "../../global/styles";

const { BigTitle } = Common;
const { HorizontalContainer, Link: LinkParent } = Common;
export const { VerticalContainer } = Common;
const { Text: TextParent } = Common;

export const Text = styled(TextParent)`
    padding: 0;
    padding-left: 10%;
    padding-right: 10%;

    font-size: 15pt;
`;

export const Link = styled(LinkParent)`
    font-size: 15pt;
    margin: 0;

    &:hover {
        color: red;
    }
`;

export const Title = styled(BigTitle)`
    text-align: center;
`;

export const Container = styled(HorizontalContainer)`
    justify-content: center;
`;

export const Background = styled.div`
    background-color: ${Colors.sideBar};
    height: 100%;
    width: 100%;
    display: flex;
    z-index: -1;
    overflow-x: hidden;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const { Button } = Common;

export const Dashboard = styled.div`
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${Colors.background};
    box-shadow: -10px 0px 20px #1113;
    z-index: 0;

    @media (max-width: 600px) {
        border-radius: 25px 25px 0px 0px;
        box-shadow: 0px -10px 20px #1113;
    }
`;
