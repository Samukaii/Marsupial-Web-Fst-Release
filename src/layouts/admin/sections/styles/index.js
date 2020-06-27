import styled from "styled-components";
import { Common, Functional } from "../../../global/styles";

//Functional Styles
export const { Add } = Functional;
export const { Delete } = Functional;
export const { EditButton } = Functional;
export const { EditableTitle } = Functional;
export const { EditableSelect } = Functional;

//Normal Global Styles
export const { List, ListElement } = Common;
export const { Input } = Common;
export const { Select } = Common;

const { MediumTitle, SmallTitle } = Common;
const { Container: NotCenteredContainer } = Common;

//Custom
export const Container = styled(NotCenteredContainer)`
    align-items: center;
`;
export const SectionTitle = styled(SmallTitle)`
    margin: auto;
    flex-grow: 20;
`;
export const Title = styled(MediumTitle)`
    margin: auto;
`;

export const Subject = styled.div``;

//Redirect Exports
export { EditLink as Edit } from "./functional";
