import React, { useEffect, useState } from "react";
import { SubjectsList } from "./static";
import { SubjectIconizer, CollapsibleForm, BreadCrumb, BreadCrumbItem } from "./components";
import { Api } from "./services";
import { Container } from "./styles";
import { Add, Delete, Edit } from "./styles";
import { List, ListElement } from "./styles";
import { Input, Select } from "./styles";
import { SectionTitle, Title } from "./styles";

export default function Sections(props) {
    const [sections, setSections] = useState([]);
    let openForm,
        isOpennedForm = false;
    let sectionName, sectionSubject;

    useEffect(() => {
        getAllSections();
    }, []);

    async function getAllSections() {
        const { data } = await Api.get("admin/sections");
        setSections(data.docs);
    }
    async function createNewSection() {
        await Api.post("admin/sections", {
            subject: sectionSubject,
            title: sectionName
        });
        getAllSections();
    }
    async function deleteSection(id) {
        await Api.delete(`admin/sections/${id}`);
        getAllSections();
    }

    function renderSections(value, index) {
        return (
            <ListElement key={index}>
                <SectionTitle>{value.title}</SectionTitle>
                <SubjectIconizer subject={value.subject} />
                <Edit
                    to={{
                        pathname: "lessons",
                        state: { id_section: value._id }
                    }}
                />
                <Delete
                    onClick={() => {
                        deleteSection(value._id);
                    }}
                />
            </ListElement>
        );
    }

    function showAddSectionForm() {
        if (isOpennedForm) createNewSection();
        else {
            openForm();
            isOpennedForm = true;
        }
    }
    function closeAddSectionForm() {
        isOpennedForm = false;
    }

    return (
        <Container>
            <BreadCrumb>
                <BreadCrumbItem item="Área administrativa" link="/app/admin" />
                <BreadCrumbItem item="Seções" link="#" active="true" />
            </BreadCrumb>
            <Title>Seções</Title>
            <List>
                {sections.map(renderSections)}
                <CollapsibleForm
                    receiveOpen={open => {
                        openForm = open;
                    }}
                    onClose={closeAddSectionForm}
                >
                    <Title>Adicionar Nova Seção</Title>
                    <Input
                        placeholder="Nome da Seção"
                        onChange={event => {
                            sectionName = event.target.value;
                        }}
                    />
                    <Select
                        list={SubjectsList}
                        onChange={event => {
                            sectionSubject = event.target.value;
                        }}
                    />
                </CollapsibleForm>
                <Add onClick={showAddSectionForm}>Adicionar nova Seção</Add>
            </List>
        </Container>
    );
}
