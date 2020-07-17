import styled from "styled-components";
import { Colors } from "../../colors";
import React from "react";

export const EditableTitle = ({ children, isEditing, onChange }) => {
    const Style = styled.input`
        padding: 0px;
        display: flex;

        font-size: 18pt;
        border: ${isEditing ? "1px dashed #0003" : "1px solid transparent"};
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

export const EditableSelect = ({
    list,
    isEditing,
    onChange,
    defaultValue,
    className
}) => {
    const Style = styled.select`
        padding: 10px;
        width: 80%;
        margin-top: 10px;
        border: 1px ${isEditing ? "dashed" : "solid"} ${Colors.borderGray};
        cursor: pointer;
        box-sizing: content-box;
        outline: none;
        background-color: #eee;
        color: black;
        &:disabled {
            background-color: #eee;
            color: black;
            border: 1px solid ${Colors.borderGray};
        }
        &::selection {
            background-color: none;
        }
    `;

    return (
        <Style
            className={className}
            onChange={onChange}
            contentEditable={isEditing}
            defaultValue={defaultValue}
            unselectable="on"
            disabled={!isEditing}
        >
            {list.map((value, index) => (
                <option id={index}>{value}</option>
            ))}
        </Style>
    );
};
