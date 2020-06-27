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
