import styled from "styled-components";
import { SubjectItemsLink } from "./parent";
import { Colors } from "../colors";
import { Link } from "react-router-dom";
import { ItemsGroup as ItemsGroupParent } from "./parent";
export { Title, LineTitle } from "./parent";

export const SectionItem = styled.div`
    color: ${Colors.sideBar};
    margin-top: 30px;
    p {
        margin-left: 20px;
    }
`;

export const ItemsGroup = styled(ItemsGroupParent)`
    justify-content: flex-start;
`;

export const LessonItem = styled(SubjectItemsLink)`
    width: 170px;
    height: 170px;
    border-radius: 5px;
    color: ${Colors.lightText};
    margin: 7px;
    align-items: center;
    background-color: #45fe;
    border: none;
    p {
        padding: 0px;
        margin: 0px;
    }
`;
