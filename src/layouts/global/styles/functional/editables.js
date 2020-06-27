import styled from "styled-components";
import { Colors } from "../../colors";
import React from "react";

export const EditableTitle = ({ children, isEditing, onChange }) => {
    const Style = styled.input`
        padding: 0px;
        display: flex;

        font-size: 18pt;
        border: ${isEditing ? "1px dashed #0003" : "none"};
        background-color: ${isEditing ? "#fff3" : "transparent"};

        text-align: center;
    `;

    let content = children
        ? typeof children === "string"
            ? children
            : children[0]
        : "";

    let size = typeof content === "string" ? content.length : 0;

    return (
        <Style
            onChange={onChange}
            size={size}
            readOnly={!isEditing}
            defaultValue={content}
        ></Style>
    );
};

export const EditableSelect = ({ list, isEditing, onChange, defaultValue }) => {
    const Style = styled.select`
        padding: 10px;
        width: 80%;
        margin-top: 10px;
        border: 1px solid ${Colors.borderGray};
        cursor: pointer;
        box-sizing: content-box;
    `;

    return (
        <Style
            onChange={onChange}
            contentEditable={!isEditing}
            defaultValue={defaultValue}
        >
            {list.map((value, index) => (
                <option id={index}>{value}</option>
            ))}
        </Style>
    );
};
