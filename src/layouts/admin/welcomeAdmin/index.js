import React from 'react';
import {Link} from '../../styles';
import {Container, BigTitle, Text} from './styles';

export default function welcomeAdmin() {
  return (
    <Container>
      <BigTitle>Seja bem vindo</BigTitle>
      <Text>
        Nessa seção é possível visualizar, adicionar, deletar e atualizar seções, módulos e
        videoaulas ao nosso banco de dados
      </Text>
      <Link href='/app/admin/sections'>Ver todas as seções</Link>
      <Link href='/app/home'>Home</Link>
    </Container>
  );
}
