import { Common, Functional } from "../../../global/styles";
import styled from "styled-components";
import { EditLink } from './functional';

export const { Container: ContainerParent, MediumTitle: Title } = Common;
export const { EditableTitle, Add } = Functional;
export const { Delete: DeleteParent } = Functional;
export const { EditButton } = Functional;
export const { EditableSelect: EditableParent } = Functional;

export const { Input } = Common;

export const { List, ListElement } = Common;
export const { SmallTitle, MediumTitle } = Common;

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

export const LessonTitle = styled(SmallTitle)`
    margin: auto;
    flex-grow:20;
`;



export const Edit = styled(EditLink)`
    flex-grow: 0 !important;
    margin: 0px !important;
    width: 20px !important;
    height: 20px !important;
`;

export const Delete = styled(DeleteParent)`
    flex-grow: 0 !important;
    margin: 0 !important;
    width: 40px !important;
    height: 40px;
`;
