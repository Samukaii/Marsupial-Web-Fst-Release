import styled from "styled-components";

export const Base = styled.div`
    background-color: #f66;
    color: white;
    padding: 10px;
    display: flex;
    border: #5335 solid 4px;
    border-left: none;
    border-right: none;
    border-top: none;
    transform: scaleY(0);
`;

export const Message = styled.div`
    flex-grow: 10;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 12pt;
    flex-grow: 1;
    width: 5px;

    &:hover {
        background-color: #fff3;
    }
`;
