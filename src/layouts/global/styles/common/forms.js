import { Colors } from "../../colors";
import styled from "styled-components";

export const Input = styled.input`
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border: 1px solid ${props => props.borderColor || Colors.borderGray};
    outline: none;
`;
export const Form = styled.form`
    width: 340px;
    height: 450px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
`;

export const Select = styled.select`
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border: 1px solid ${Colors.borderGray};
    cursor: pointer;
    box-sizing: content-box;
`;
