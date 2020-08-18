import React from "react";
import { Container, Title, Text, Link } from "./styles";
import { BreadCrumb, BreadCrumbItem } from "./components";

export default function Admin() {
    return (
        <Container>
            <BreadCrumb>
                <BreadCrumbItem item="Área administrativa" link="#" active="true" />
                <BreadCrumbItem item="Seções" link="/app/admin/sections" />
            </BreadCrumb>
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
