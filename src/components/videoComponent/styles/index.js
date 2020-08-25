import styled from "styled-components";

export const Base = styled.iframe`
    background-color: #000;
    height: 70vh;
    border:none;
    margin:0;
    flex-grow: 1;

    @media (max-width:600px){
        height:70%;
    }
`;
