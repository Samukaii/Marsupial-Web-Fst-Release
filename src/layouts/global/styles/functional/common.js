import React from "react";
import styled from "styled-components";
import { Colors } from "../../colors";

export const Select = props => {
    const Style = styled.select`
        padding: 10px;
        width: 80%;
        margin-top: 10px;
        border: 1px solid ${Colors.borderGray};
        cursor: pointer;
        box-sizing: content-box;
    `;
    return (
        <Style onChange={props.onChange}>
            {props.list.map((item, index) => (
                <option id={index}>{item}</option>
            ))}
        </Style>
    );
};

export const Loading = ({ children, isLoading }) => {
    const Icon = styled.span`
        background-color: none;
        width: 7px;
        height: 7px;
        border: ${Colors.sideBar} dashed 3px;
        border-radius: 100%;

        animation: rotating 2s ease infinite;

        @keyframes rotating {
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        }
    `;

    const Base = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px;
    `;

    const Text = styled.span`
        margin-right: 5px;
        text-justify: center;
        font-size: 12pt;
        color: ${Colors.sideBar};
    `;

    if (isLoading) {
        return (
            <Base>
                <Text>{children}</Text>
                <Icon></Icon>
            </Base>
        );
    } else return <Base></Base>;
};
