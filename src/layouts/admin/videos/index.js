import React, { useState, useEffect } from "react";
import { Api } from "./services";
import {
    EditableTitle,
    EditableSelect,
    List,
    ListElement,
    VideoTitle,
    Edit,
    Delete,
    Input,
    Add,
} from "./styles";
import { Container, Title } from "./styles";
import { EditButton } from "./styles";
import { TitleInfo, SubjectInfo } from "./styles";
import { SubjectsList } from "./static";
import { BreadCrumbItem, BreadCrumb, CollapsibleForm } from "./components";

export default function Videos({ idLesson }) {
    const [sections, setSections] = useState([]);
    const [lesson, setLesson] = useState({});
    const [section, setSection] = useState({});
    const [videos, setVideos] = useState([]);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingSection, setIsEditingSection] = useState(false);
    const [newValues, setNewValues] = useState({});
    const [sectionsNames, setSectionsNames] = useState([]);

    let videoName, videoLink;
    let openForm,
        isOpennedForm = false;

    useEffect(() => {
        getAllSections();
        getLesson(idLesson);
        getAllVideos();
    }, []);

    useEffect(() => {
        setNewValues(lesson);
    }, [lesson]);

    async function getAllSections() {
        const { data } = await Api.get("admin/sections");
        let sectionsNames = [];
        data.docs.map((value) => {
            sectionsNames.push(value.title);
        });
        setSectionsNames(sectionsNames);
        setSections(data.docs);
    }

    async function getAllVideos() {
        const { data } = await Api.get("admin/videos");
        setVideos(data.docs);
    }

    async function createNewVideo() {
        await Api.post("admin/videos", {
            title: videoName,
            lesson: idLesson,
            linkVideo: videoLink,
        });
        getAllVideos();
    }

    async function deleteVideo(id) {
        await Api.delete(`admin/videos/${id}`);
        getAllVideos();
    }

    async function getLesson(id) {
        const { data } = await Api.get(`admin/lessons/${id}`);
        setLesson(data);

        const { data: currentSection } = await Api.get(
            `admin/sections/${data.section}`
        );

        setSection(currentSection);
    }
    async function putLesson(id, newValues) {
        const response = await Api.put(`admin/lessons/${id}`, newValues);
        setLesson(response.data);
    }

    function editLesson() {
        isEditingTitle && putLesson(idLesson, newValues);
        setIsEditingTitle(!isEditingTitle);
    }

    function editSection() {
        isEditingSection && putLesson(idLesson, newValues);
        setIsEditingSection(!isEditingSection);
    }

    function editNewValues(field, value) {
        newValues[field] = value.target.value;
    }

    function showAddVideoForm() {
        if (isOpennedForm) createNewVideo();
        else {
            openForm();
            isOpennedForm = true;
        }
    }
    function closeAddVideoForm() {
        isOpennedForm = false;
    }

    function renderVideos(value, index) {
        return (
            <ListElement key={index}>
                <VideoTitle>{value.title}</VideoTitle>

                <Delete
                    onClick={() => {
                        deleteVideo(value._id);
                    }}
                />
            </ListElement>
        );
    }
    return (
        <Container>
            <BreadCrumb>
                <BreadCrumbItem item="Área administrativa" link="/app/admin" />
                <BreadCrumbItem item="Seções" link="/app/admin/sections" />
                <BreadCrumbItem item={section.title} link="#" />
                <BreadCrumbItem item={lesson.title} link="#" active="true" />
            </BreadCrumb>

            <TitleInfo>
                <EditableTitle
                    isEditing={isEditingTitle}
                    onChange={(value) => editNewValues("title", value)}
                >
                    {newValues.title}
                </EditableTitle>
                <EditButton onClick={editLesson} />
            </TitleInfo>

            <SubjectInfo>
                <Title>Seção</Title>
                <EditableSelect
                    isEditing={isEditingSection}
                    list={sectionsNames}
                    defaultValue={section.title}
                    onChange={(value) => editNewValues("section", value)}
                />
                <EditButton onClick={editSection} />
            </SubjectInfo>

            <List>
                {videos.map(renderVideos)}
                <CollapsibleForm
                    receiveOpen={(open) => {
                        openForm = open;
                    }}
                    onClose={closeAddVideoForm}
                >
                    <Title>Adicionar Novo Video</Title>
                    <Input
                        placeholder="Título do Vídeo"
                        onChange={(event) => {
                            videoName = event.target.value;
                        }}
                    />
                    <Input
                        placeholder="Link do Vídeo"
                        onChange={(event) => {
                            videoLink = event.target.value;
                        }}
                    />
                </CollapsibleForm>
                <Add onClick={showAddVideoForm}>Adicionar novo Vídeo</Add>
            </List>
        </Container>
    );
}
