import styled from "styled-components";
import { Colors } from "../../colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VerticalContainer = styled(Container)``;

export const HorizontalContainer = styled(Container)`
    flex-direction: row;
`;

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${Colors.background};
`;

export const Button = styled.button`
    background-color: ${(props) => props.buttonColor || Colors.button};
    color: ${(props) => props.color || Colors.lightText};

    margin-top: 10px;
    padding: 10px;
    height: 50px;
    border: none;
    outline: none;

    font-size: 12pt;
    font-weight: bold;
    cursor: pointer;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.color || Colors.themedText};
    margin: 10px;
    font-size: 11pt;
    text-align: center;
`;

export const Block = styled.div`
    width: ${(props) => props.size | 200}px;
    height: ${(props) => props.size | 200}px;
    background-color: #eee;
`;

export const BlockButton = styled.button`
    width: ${(props) => props.size | 200}px;
    height: ${(props) => props.size | 200}px;
    background-color: #eee;
`;

export const BlockLink = styled.a`
    width: ${(props) => props.size | 200}px;
    height: ${(props) => props.size | 200}px;
    background-color: #eee;
`;

export const HorizontalLine = styled.hr``;
