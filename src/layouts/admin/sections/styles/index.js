import styled from "styled-components";
import { Common, Functional } from "../../../global/styles";
import { EditLink } from "./functional";

//Functional Styles
export const { Add } = Functional;
export const { EditButton } = Functional;
export const { EditableTitle } = Functional;
export const { EditableSelect } = Functional;
export const { Select } = Functional;

const { Delete: DeleteParent } = Functional;

//Normal Global Styles
export const { List, ListElement } = Common;
export const { Input } = Common;

const { MediumTitle, SmallTitle } = Common;
const { Container: ContainerParent } = Common;

//Custom

export const Delete = styled(DeleteParent)`
    flex-grow: 0 !important;
    margin: 0 !important;
    width: 40px !important;
    height: 40px;
`;
export const Edit = styled(EditLink)`
    flex-grow: 0 !important;
    margin: 0px !important;
    width: 20px !important;
    height: 20px !important;
`;

export const Container = styled(ContainerParent)`
    align-items: center;
`;
export const SectionTitle = styled(SmallTitle)`
    margin: auto;
    flex-grow: 20;
`;
export const Title = styled(MediumTitle)`
    color: black;
    margin: auto;
`;

export const Subject = styled.div``;
