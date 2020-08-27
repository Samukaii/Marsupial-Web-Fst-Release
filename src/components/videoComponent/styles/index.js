import styled from "styled-components";

export const Base = styled.iframe`
    background-color: #000;
    height: 70vh;
    border: 3px solid #111;
    margin: 0;
    flex-grow: 1;
    box-shadow: 0px 0px 10px #111;

    @media (max-width: 600px) {
        height: 70%;
    }
`;
