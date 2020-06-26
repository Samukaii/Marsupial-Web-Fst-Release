import styled from "styled-components";
import {
    Add as add,
    Edit as edit,
    Delete as del,
    Select as select,
    EditableTitle as editableTitle,
    EditButton as editButton
} from "./functionalStyles";

export const Add = add;
export const Edit = edit;
export const Delete = del;
export const EditableTitle = editableTitle;
export const EditButton = editButton;

export const List = styled.ul`
    padding: 20px;
    margin: 0px;
    display: auto;
    width: 80%;
`;

export const ListElement = styled.li`
    display: flex;
    padding: 5px;
    border: 0px solid #0005;
    border-bottom-width: 2px;
    list-style: none;
    width: auto;

    &:hover {
        background-color: #0001;
    }
`;

export const Container = styled.div`
    padding: auto;
    margin: auto;
    display: flex;
`;

export const Title = styled.h2`
    padding: auto;
    margin: 10px;
    display: auto;
`;

export const SectionTitle = styled.div`
    padding: auto;
    margin: auto;
    display: auto;
    flex-grow: 20;
`;

export const Input = styled.input`
    padding: 10px;
    width: 80%;
    margin-top: 10px;
    border: 1px solid #999;
`;

export const Subject = styled.div``;

export const Select = select;
