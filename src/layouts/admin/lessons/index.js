import React, { useState, useEffect } from "react";
import { Api } from "./services";
import { EditableTitle, EditableSelect } from "./styles";
import { Container, Title } from "./styles";
import { EditButton } from "./styles";
import { SubjectsList } from "./static";

export default function Lessons({ idSection }) {
    const [section, setSection] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [newValues, setNewValues] = useState({});

    useEffect(() => {
        getSection(idSection);
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
        isEditing && putSection(idSection, newValues);
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
                        alignSelf: "flex-start"
                    }}
                >
                    Matéria
                </Title>
                <EditableSelect
                    list={SubjectsList}
                    defaultValue={newValues.subject}
                />
            </div>
        </Container>
    );
}
