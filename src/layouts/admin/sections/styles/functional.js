import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const EditLink = ({ color, to, className }) => {
    const Style = styled(Link)`
        padding: 7px;
        margin: 10px;
        display: flex;
        justify-content: center;
        flex-grow: 0;

        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: ${color ? color + "5" : "#3335"};
        }
    `;
    return (
        <Style to={to} className={className}>
            <FontAwesomeIcon
                icon={faPen}
                color={color || "#333"}
                style={{ width: 20, height: 20 }}
            />
        </Style>
    );
};
