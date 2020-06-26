import {
    faPen,
    faPlus,
    faTrash,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const Edit = props => {
    const Style = styled.a`
        padding: 7px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-grow: 1;

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: ${props.color ? props.color + "5" : "#3335"};
        }
    `;
    return (
        <Style href={props.href}>
            <FontAwesomeIcon icon={faPen} color={props.color || "#333"} />
        </Style>
    );
};
export const EditButton = props => {
    const Style = styled.button`
        padding: 7px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-grow: 1;

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: ${props.color ? props.color + "5" : "#3335"};
        }
    `;
    return (
        <Style onClick={props.onClick}>
            <FontAwesomeIcon icon={faPen} color={props.color || "#333"} />
        </Style>
    );
};

export const Delete = props => {
    const Style = styled.button`
        padding: 7px;
        margin: auto;
        display: auto;
        flex-grow: 1;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: ${props.color ? props.color + "5" : "#f225"};
        }
    `;
    return (
        <Style onClick={props.onClick}>
            <FontAwesomeIcon icon={faTrash} color={props.color || "#f22"} />
        </Style>
    );
};

export const Add = props => {
    const Style = styled.button`
        padding: 10px;
        width: 100%;
        margin-top: 10px;

        background-color: ${props.color || "#f53"};
        border: none;
        cursor: pointer;
        color: ${props.textColor || "#eee"};
    `;
    return (
        <Style onClick={props.onClick}>
            {props.children}
            <FontAwesomeIcon
                style={{ marginLeft: 5 }}
                icon={faPlus}
                color={props.colorIcon || "#eee"}
            />
        </Style>
    );
};

export const Select = props => {
    const Style = styled.select`
        padding: 10px;
        width: 80%;
        margin-top: 10px;
        border: 1px solid #999;
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
        border: 1px solid #999;
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
