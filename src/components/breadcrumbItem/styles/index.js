import styled from "styled-components";
import { Colors } from "../colors";

export const BreadcrumbLink = styled.a`
    text-decoration: none;
    color: ${props => (props.active ? "#555" : Colors.sideBar)};
    font-size: 12pt;

    &:hover {
        color: #c33;
    }
`;
