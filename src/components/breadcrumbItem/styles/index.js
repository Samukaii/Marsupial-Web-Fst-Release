import styled from "styled-components";
import { Colors } from "../colors";

export const BreadcrumbLink = styled.a`
    text-decoration: none;
    color: ${props => (props.active ? "#555" : Colors.sideBar)};
    font-size: 12pt;
    cursor:default;

    &:hover {
        color: ${props => (props.active ? "#555" : "#c33")};
        cursor: ${props => (props.active ? "default" : "pointer")};
        
    }
`;
