import styled from "styled-components";
import { SubjectItemsLink } from "./parent";
import { Colors } from "../colors";
import { Link } from "react-router-dom";
export { Title, LineTitle, ItemsGroup } from "./parent";

export const SectionItem = styled.div`
    color: ${Colors.sideBar};
    margin-top: 30px;
    p {
        margin-left: 20px;
    }
`;

export const LessonItem = styled(SubjectItemsLink)``;
