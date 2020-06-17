import React, {useState, useEffect} from 'react';
import {ListElement, List, Title, Delete, Edit, SectionTitle, Add, Input, Select} from './styles/index';
import api, {isAuth} from '../../../services/api';
import {Container} from '../welcomeAdmin/styles';
import {CollapsibleForm} from '../../../components/Forms';
import subjectsList from '../../../config/subjects.json';

export default function Sections() {
  const [sections, setSections] = useState(['Seção 1', 'Seção 2']);
  const token = isAuth();
  let openForm, closeForm, isOpennedForm;
  let sectionName, sectionSubject;

  useEffect(() => {
    getAllSections();
  }, []);

  async function getAllSections() {
    if (!token) return;
    const {data} = api.get('admin/sections', {
      headers: {
        'x-access-token': token
      }
    });
    //setSections(data.docs);
  }
  async function createNewSection(data) {
    if (!token) return;
    api.post('admin/sections',data, {
      headers: {
        'x-access-token': token
      }
    });
    //setSections(data.docs);
  }

  function renderSections(value, index) {
    return (
      <ListElement key={index}>
        <SectionTitle>{value}</SectionTitle>
        <Edit />
        <Delete />
      </ListElement>
    );
  }

  function showAddSectionForm() {
    isOpennedForm
    ?createNewSection()
    :openForm();
  }
  function hideAddSectionForm() {
    closeForm();
  } 

  return (
    <Container>
      <Title>Seções</Title>
      <List>
        {sections.map(renderSections)}
        <CollapsibleForm
          receive={(open, close) => {
            openForm = open;
            closeForm = close;
          }}>
          <Title>Adicionar Nova Seção</Title>
          <Input placeholder="Nome da Seção" onChange={(event)=>{sectionName = event.target.value}}/>
          <Select list={subjectsList} onChange={event=>{sectionSubject = event.target.value}} />
        </CollapsibleForm>
        <Add onClick={showAddSectionForm}>Adicionar nova Seção</Add>
      </List>
    </Container>
  );
}
