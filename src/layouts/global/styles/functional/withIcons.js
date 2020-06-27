import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";

export const Add = ({ children, colorIcon, textColor, color, onClick }) => {
    const Style = styled.button`
        padding: 10px;
        width: 100%;
        margin-top: 10px;

        background-color: ${color || "#f53"};
        border: none;
        cursor: pointer;
        color: ${textColor || "#eee"};
    `;
    return (
        <Style onClick={onClick}>
            {children}
            <FontAwesomeIcon
                style={{ marginLeft: 5 }}
                icon={faPlus}
                color={colorIcon || "#eee"}
            />
        </Style>
    );
};

export const Delete = ({ color, onClick }) => {
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
            background-color: ${color ? color + "5" : "#f225"};
        }
    `;
    return (
        <Style onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} color={color || "#f22"} />
        </Style>
    );
};

export const EditButton = ({ onClick, color }) => {
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
            background-color: ${color ? color + "5" : "#3335"};
        }
    `;
    return (
        <Style onClick={onClick}>
            <FontAwesomeIcon icon={faPen} color={color || "#333"} />
        </Style>
    );
};

export const Edit = ({ color, href }) => {
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
            background-color: ${color ? color + "5" : "#3335"};
        }
    `;
    return (
        <Style href={href}>
            <FontAwesomeIcon icon={faPen} color={color || "#333"} />
        </Style>
    );
};
