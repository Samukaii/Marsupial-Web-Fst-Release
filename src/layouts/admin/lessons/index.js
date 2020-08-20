import React, { useState, useEffect } from "react";
import { Api } from "./services";
import { EditableTitle, EditableSelect, List, ListElement, LessonTitle, Edit, Delete, Input, Add } from "./styles";
import { Container, Title } from "./styles";
import { EditButton } from "./styles";
import { TitleInfo, SubjectInfo } from "./styles";
import { SubjectsList } from "./static";
import { BreadCrumbItem, BreadCrumb, CollapsibleForm } from "./components";

export default function Lessons({ idSection }) {
    const [section, setSection] = useState({});
    const [lessons, setLessons] = useState([]);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingSubject, setIsEditingSubject] = useState(false);
    const [newValues, setNewValues] = useState({});

    let lessonName, lessonSection;
    let openForm,
        isOpennedForm = false;

    useEffect(() => {
        getSection(idSection);
        getAllLessons();
    }, []);

    useEffect(() => {
        setNewValues(section);
    }, [section]);

    async function getAllLessons() {
        const { data } = await Api.get("admin/lessons");
        setLessons(data.docs);
        console.log(data.docs);
    }

    async function createNewLesson() {
        await Api.post("admin/lessons", {
            section: idSection,
            title: lessonName
        });
        getAllLessons();
    }

    async function deleteLesson(id) {
        await Api.delete(`admin/lessons/${id}`);
        getAllLessons();
    }

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


    function showAddLessonForm() {
        if (isOpennedForm) createNewLesson();
        else {
            openForm();
            isOpennedForm = true;
        }
    }
    function closeAddLessonForm() {
        isOpennedForm = false;
    }

    function renderLessons(value, index) {
        return (
            <ListElement key={index}>
                <LessonTitle>{value.title}</LessonTitle>
                <Edit
                    to={{
                        pathname: "videos",
                        state: {
                            id_lesson: value._id
                        }
                    }}
                ></Edit>
                <Delete onClick={() => { deleteLesson(value._id) }} />
            </ListElement>
        )
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

            <List>
                {lessons.map(renderLessons)}
                <CollapsibleForm
                    receiveOpen={open => {
                        openForm = open;
                    }}
                    onClose={closeAddLessonForm}
                >
                    <Title>Adicionar Nova Aula</Title>
                    <Input
                        placeholder="Nome da Aula"
                        onChange={event => {
                            lessonName = event.target.value;
                        }}
                    />
                </CollapsibleForm>
                <Add onClick={showAddLessonForm}>Adicionar nova Aula</Add>
            </List>

        </Container>
    );
}
