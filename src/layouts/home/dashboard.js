import {Dashboard as Dash} from './styles/index';
import React from 'react';

const {ContentCard, CardItem} = Dash;

export default function Dashboard(props) {
  return (
    <>
      <ContentCard ref={props.card}>
        <CardItem> Linguagens e suas Tecnologias</CardItem>
        <CardItem> Ciências Humanas</CardItem>
      </ContentCard>
      <ContentCard ref={props.card}>
        <CardItem> Matemática</CardItem>
        <CardItem> Redação</CardItem>
      </ContentCard>
    </>
  );
}
