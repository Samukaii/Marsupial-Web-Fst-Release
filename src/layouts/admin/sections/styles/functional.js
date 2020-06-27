import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const EditLink = ({ color, to }) => {
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
        <Style>
            <FontAwesomeIcon icon={faPen} color={color || "#333"} />
            <Link to={to} />
        </Style>
    );
};
