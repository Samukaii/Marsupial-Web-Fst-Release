import React from "react";
import { Container, Title, Text, Link } from "./styles";

export default function Admin() {
    return (
        <Container>
            <Title>Seja bem vindo</Title>
            <Text>
                Nessa seção é possível visualizar, adicionar, deletar e
                atualizar seções, módulos e videoaulas ao nosso banco de dados
            </Text>
            <Link href="/app/admin/sections">Ver todas as seções</Link>
            <Link href="/app/home">Home</Link>
        </Container>
    );
}
