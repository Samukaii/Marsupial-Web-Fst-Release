import styled from "styled-components";
import { Colors } from "../../../config/styles";
import { Common } from "../../global/styles";

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

export const SearchButton = styled(Button)`
    background-color: ${Colors.search};

    padding: 5px;
    border-radius: 20px;

    &:hover {
        background-color: #36f5;
    }
`;

export const SearchBar = styled.form`
    box-shadow: 0px 5px 20px #1114;
    border-radius: 25px;
    background-color: ${Colors.search};
    width: 260px;
    padding: 8px;
    margin-left: 10px;
    margin-top: 5px;
    display: flex;
`;

export const InputSearch = styled.input`
    border-radius: 25px;
    width: 100%;
    border: none;
    background-color: ${Colors.search};
    outline: none;
`;

export const ContentCard = styled.div`
    margin-top: 40px;
    align-items: center;
    float: left;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const CardItem = styled.div`
    margin: 20px;
    width: 300px;
    height: 150px;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    z-index: 1;
`;
