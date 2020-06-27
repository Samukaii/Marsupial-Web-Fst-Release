import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Dashboard = styled.div`
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: ${Colors.background};
    box-shadow: -10px 0px 20px #1113;
    z-index: 0;
    width: 100%;

    @media (max-width: 600px) {
        border-radius: 25px 25px 0px 0px;
        box-shadow: 0px -10px 20px #1113;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const HeaderDashboard = styled.div`
    margin: 15px;
    display: flex;
    height: 50px;
    z-index: 0;
`;

export const HideShowMenu = styled.button`
    background-color: #0000;
    height: 40px;
    width: 40px;
    border: none;
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
    outline: none;

    &:hover {
        background-color: #36f5;
    }
`;
