import React, { useState, useEffect } from "react";
import { Api } from "./services";
import { EditableTitle, EditableSelect } from "./styles";
import { Container, Title } from "./styles";
import { EditButton } from "./styles";
import { TitleInfo, SubjectInfo } from "./styles";
import { SubjectsList } from "./static";
import { BreadCrumbItem, BreadCrumb } from "./components";

export default function Lessons({ idSection }) {
    const [section, setSection] = useState({});
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingSubject, setIsEditingSubject] = useState(false);
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
        isEditingTitle && putSection(idSection, newValues);
        setIsEditingTitle(!isEditingTitle);
    }

    function editSubject() {
        isEditingSubject && putSection(idSection, newValues);
        setIsEditingSubject(!isEditingSubject);
    }

    function editNewValues(field, value) {
        newValues[field] = value.target.value;
    }
    return (
        <Container>
            <BreadCrumb>
                <BreadCrumbItem item="Área administrativa" link="/app/admin" />
                <BreadCrumbItem item="Seções" link="/app/admin/sections" />
                <BreadCrumbItem item={newValues.title} link="#" active="true" />
            </BreadCrumb>

            <TitleInfo>
                <EditableTitle
                    isEditing={isEditingTitle}
                    onChange={value => editNewValues("title", value)}
                >
                    {newValues.title}
                </EditableTitle>
                <EditButton onClick={editSection} />
            </TitleInfo>

            <SubjectInfo>
                <Title>Matéria</Title>
                <EditableSelect
                    isEditing={isEditingSubject}
                    list={SubjectsList}
                    defaultValue={newValues.subject}
                    onChange={value => editNewValues("subject", value)}
                />
                <EditButton onClick={editSubject} />
            </SubjectInfo>
        </Container>
    );
}
