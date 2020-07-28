import styled from "styled-components";
import { SubjectItems } from "./parent";
import { Colors } from "../colors";
export { Title, LineTitle, ItemsGroup } from "./parent";

export const SectionItem = styled.div`
    color: ${Colors.sideBar};
    margin-top: 30px;
    p {
        margin-left: 20px;
    }
`;

export const LessonItem = styled(SubjectItems)``;
