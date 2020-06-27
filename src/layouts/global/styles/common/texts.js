import { Colors } from "../../colors";
import styled from "styled-components";

export const BigTitle = styled.h1`
    color: ${props => props.color || Colors.themedText};
`;

export const MediumTitle = styled.h2`
    padding: auto;
    margin: 10px;
    display: auto;
`;

export const SmallTitle = styled.h3`
    padding: auto;
    margin: 10px;
    display: auto;
`;

export const Text = styled.p`
    color: ${props => props.color || Colors.themedText};
    padding: 30px;
`;
