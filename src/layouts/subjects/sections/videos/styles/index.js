import { Common } from "../../../../global/styles";
import styled from "styled-components";
import { Colors } from "../Colors";

export const { MediumTitle: Title } = Common;

export const Base = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ListVideos = styled.ul`
    list-style: none;
    background-color: white;
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const VideoItem = styled.a`
    text-decoration: none;
    margin: 0;
    padding: 5px;

    &:hover {
        color: ${Colors.themedText};
    }
`;
