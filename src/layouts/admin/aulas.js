import React from 'react';
import {Form} from '../styles';

export default function aulas() {
  return (
    //Sabe a seção sections? a ideia é que ela liste todas as seções que já existem no BD
    //Tenha um botão que leva pra parte de edição dela e outro que exclua
    //aí embaixo é que tem um botão que abre um formulário pra adição
    //um get all um delete e um put
    <Form>
      <label>Nome da Aula</label>
      <input type='text' name='materia' placeholder='Nome da aula' />

      <label>Materia</label>
      <select>
        <option value='matematica'>Matemática</option>
        <option value='literatura'>Literatura</option>
        <option selected value='Gramatica'>
          Coco
        </option>
        <option value='Geografia'>Manga</option>
      </select>
    </Form>
  );
}
