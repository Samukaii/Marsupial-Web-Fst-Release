import { Common, Functional } from "../../../global/styles";
import styled from "styled-components";

export const { Container: ContainerParent, MediumTitle: Title } = Common;
export const { EditableTitle } = Functional;
export const { EditButton } = Functional;
export const { EditableSelect: EditableParent } = Functional;

export const EditableSelect = styled(EditableParent)`
    margin-top: 0 !important;
    margin-right: 20px;
    height: 20px;
`;

export const Container = styled(ContainerParent)`
    align-items: center;
    padding-left: 7%;
    padding-right: 7%;
`;
export const TitleInfo = styled.div`
    display: flex;
`;
export const SubjectInfo = styled.div`
    display: flex;
    padding-top: 50px;
    align-self: flex-start;
`;
