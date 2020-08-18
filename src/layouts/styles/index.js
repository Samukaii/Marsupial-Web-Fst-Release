import styled from "styled-components";
import { Common, Functional } from "../global/styles";

//Global Exports
export const { Background } = Common;
export const { Button: ActionButton } = Common;
export const { Form } = Common;
export const { Link } = Common;
export const { Loading } = Functional;
export { HiddenMessage } from "../global/components";

//Internal Exports
export const Logo = styled.h3`
    width: 300px;
    text-align: center;
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 10px;
    outline: none;
`;
