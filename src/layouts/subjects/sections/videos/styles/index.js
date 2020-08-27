import { Common } from "../../../../global/styles";
import styled from "styled-components";
import { Colors } from "../colors";

export const { MediumTitle: Title} = Common;
const { HorizontalLine: HorizontalLineParent, SmallTitle: SmallTitleParent  } = Common;

export const SmallTitle = styled(SmallTitleParent)`
    color: ${Colors.themedText};
`;

export const HorizontalLine = styled(HorizontalLineParent)`
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid ${Colors.themedText};
    width: 80%;
`;

export const BaseVideos = styled.div`
    display: flex;
    width: 85%;
    flex-wrap: nowrap;
`;

export const Base = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ListVideos = styled.ul`
    list-style: none;
    margin: 0;
    margin-left: 7px;
    background-color: ${Colors.lightTheme};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    padding: 15px;
    flex-grow: 0.2;
`;

export const VideoItem = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    text-align: left;
    margin: 0;
    font-size: 12pt;
    outline: none;
    border-bottom: 1px solid ${Colors.sideBar};
    padding: 5px;
    color: ${Colors.sideBar};

    &:hover {
        color: ${Colors.alerts};
    }
`;
