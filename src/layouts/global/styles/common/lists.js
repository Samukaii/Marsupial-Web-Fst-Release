import styled from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 0px;
    display: auto;
    width: 80%;
`;

export const ListElement = styled.li`
    display: flex;
    padding: 5px;
    border: 0px solid #0005;
    border-bottom-width: 2px;
    list-style: none;
    width: auto;

    &:hover {
        background-color: #0001;
    }
`;
