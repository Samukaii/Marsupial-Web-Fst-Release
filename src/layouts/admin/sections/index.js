import React, {useState, useEffect} from 'react';
import {ListElement, List, Title, Delete, Edit, SectionTitle, Add, Input} from './styles/index';
import api, {isAuth} from '../../../services/api';
import {Container} from '../welcomeAdmin/styles';
import {CollapsibleForm} from '../../../components/Forms';

export default function Sections() {
  const [sections, setSections] = useState(['Seção 1', 'Seção 2']);
  let openForm, closeForm;

  useEffect(() => {
    getAllSections(isAuth());
  }, []);

  async function getAllSections(token) {
    if (!token) return;
    const {data} = api.get('admin/sections', {
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
    openForm();
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
          <Input />
          <Input />
          <Input />
        </CollapsibleForm>
        <Add onClick={showAddSectionForm}>Adicionar nova Seção</Add>
      </List>
    </Container>
  );
}
