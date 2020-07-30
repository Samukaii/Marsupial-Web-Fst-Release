import { Common } from "../../global/styles";
import styled from "styled-components";
import { Colors } from "../colors";
import { Link } from "react-router-dom";

const { BlockLink } = Common;
const { HorizontalLine } = Common;
const { MediumTitle } = Common;

export const SubjectItems = styled(BlockLink)`
    text-decoration: none;
    border-radius: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.themedText};
    border: 2px solid ${Colors.sideBar};
    outline: none;
    transition: background-color 0.2s;
    transition: color 0.2s;
    transition: transform 0.2s;

    p {
        text-align: center;
        position: relative;
        top: 25%;
    }

    &:hover {
        background-color: ${Colors.sideBar};
        color: white;
        transform: scale(1.05);

        svg {
            color: white;
        }
    }
`;

export const SubjectItemsLink = styled(Link)`
    text-decoration: none;
    border-radius: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.themedText};
    border: 2px solid ${Colors.sideBar};
    outline: none;
    transition: background-color 0.2s;
    transition: color 0.2s;
    transition: transform 0.2s;

    p {
        text-align: center;
        position: relative;
        top: 25%;
    }

    &:hover {
        background-color: ${Colors.sideBar};
        color: white;
        transform: scale(1.05);

        svg {
            color: white;
        }
    }
`;

export const Title = styled(MediumTitle)`
    text-align: center;
`;

export const LineTitle = styled(HorizontalLine)`
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid ${Colors.themedText};
`;

export const ItemsGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
`;
