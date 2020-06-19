import React, { useEffect, useState } from 'react';
import { CollapsibleForm } from '../../../components/Forms';
import SubjectIconizer from '../../../components/iconizers/subjects';
import subjectsList from '../../../config/subjects.json';
import api, { isAuth } from '../../../services/api';
import { Container } from '../welcomeAdmin/styles';
import { Add, Delete, Edit, Input, List, ListElement, SectionTitle, Select, Title } from './styles/index';

export default function Sections() {
  const [sections, setSections] = useState([]);
  const token = isAuth();
  let openForm, isOpennedForm = false;
  let sectionName, sectionSubject;

  useEffect(() => {
    getAllSections();
  }, []);

  async function getAllSections() {
    if (!token) return;
    const {data} = await api.get('admin/sections', {
      headers: {
        'x-access-token': token
      }
    });
    setSections(data.docs);
  }
  async function createNewSection() {
    if (!token) return; 
    await api.post('admin/sections',{subject:sectionSubject,title:sectionName }, {
      headers: {
        'x-access-token': token
      }
    });
    getAllSections();
  }
  async function deleteSection(id) {
    if (!token) return; 
    await api.delete(`admin/sections/${id}`, {
      headers: {
        'x-access-token': token
      }
    });
    getAllSections();
  }

  function renderSections(value, index) {
    return (
      <ListElement key={index}>
        <SectionTitle>{value.title}</SectionTitle>
        <SubjectIconizer subject={value.subject}/>
        <Edit/>
        <Delete onClick={()=>{deleteSection(value._id)}}/>
      </ListElement>
    );
  }

  function showAddSectionForm() {
    if(isOpennedForm)createNewSection();
    else {openForm();isOpennedForm = true}
  }
  function closeAddSectionForm(){
    isOpennedForm = false;
  }

  return (
    <Container>
      <Title>Seções</Title>
      <List>
        
        {sections.map(renderSections)}
        <CollapsibleForm 
          receiveOpen={open => openForm = open}
          onClose = {closeAddSectionForm}>

          <Title>Adicionar Nova Seção</Title>
          <Input placeholder="Nome da Seção" onChange={(event)=>{sectionName = event.target.value}}/>
          <Select list={subjectsList} onChange={event=>{sectionSubject = event.target.value}} />
        </CollapsibleForm>
        <Add onClick={showAddSectionForm}>Adicionar nova Seção</Add>
      </List>

    </Container>
  );
}
