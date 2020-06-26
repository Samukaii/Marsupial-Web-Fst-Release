import React from "react";
import { Container } from "../welcomeAdmin/styles";
import { Title, Edit, Input } from "./styles/index";
import Api from "../../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { EditableTitle, EditButton } from "./styles";
import { Colors } from "../../../config/styles";
import subjects from "../../../config/subjects.json";
import { EditableSelect } from "./styles/functionalStyles";

export default function EditSections({ match }) {
    const [section, setSection] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [newValues, setNewValues] = useState({});

    useEffect(() => {
        getSection(match.params.id);
    }, []);

    useEffect(() => {
        setNewValues(section);
    }, [section]);

    async function getSection(id) {
        const response = await Api.get(`admin/sections/${id}`);
        setSection(response.data);
    }
    async function putSection(id, newValues) {
        const response = await Api.put(`admin/sections/${id}`, newValues);
        setSection(response.data);
    }

    function editSection() {
        isEditing && putSection(match.params.id, newValues);
        setIsEditing(!isEditing);
    }

    function editNewValues(field, value) {
        newValues[field] = value.target.value;
    }
    return (
        <Container>
            <div style={{ display: "flex" }}>
                <EditableTitle
                    isEditing={isEditing}
                    onChange={value => editNewValues("title", value)}
                >
                    {newValues.title}
                </EditableTitle>
                <EditButton onClick={editSection} />
            </div>

            <div style={{ display: "flex", width: "80%" }}>
                <Title
                    style={{
                        alignSelf: "flex-start",
                        color: Colors.themedText
                    }}
                >
                    Matéria
                </Title>
                <EditableSelect
                    list={subjects}
                    defaultValue={newValues.subject}
                />
            </div>
        </Container>
    );
}
