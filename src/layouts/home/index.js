import { ContentCard, CardItem, Title } from "./styles";
import React from "react";
import { Container, Text, VerticalContainer, Link } from "./styles";

export default function Home() {
    return (
        <Container>
            <VerticalContainer>
                <Title>Seja bem vindo, Coala</Title>
                <Text>
                    O projeto Marsupial é uma plataforma Web pensada para você
                    que sempre que vai estudar para o Enem, se depara com
                    centenas de conteúdos e não tem ideia de por onde começar e
                    o que realmente precisa estudar.
                </Text>
                <Text>
                    Temos a proposta de reunir em um único aplicativo
                    completamente gratuito e sem nenhum fim comercial, o máximo
                    de conteúdos encontrados no Youtube sobre as matérias que
                    mais caem no Enem de uma forma organizada e esquematizada,
                    permitindo um bom aproveitamento de tempo e conteúdo
                </Text>
                <Text>
                    É importante ressaltar que não hospedamos aqui qualquer
                    vídeo de terceiros, apenas utilizamos o recurso de
                    incorporação do Youtube para trazer uma melhor experiência
                    para você que está estudando.
                </Text>
                <Text>
                    Nossa aplicação é gratuita e de código aberto, sendo assim
                    se você que é desenvolvedor tiver interesse em melhorar a
                    plataforma, sinta-se muito bem vindo
                </Text>
                <Text>
                    <Link
                        target="_blank"
                        href="https://github.com/samukaii/marsupial-web-fst-release"
                    >
                        Link do repositório
                    </Link>
                </Text>
            </VerticalContainer>
        </Container>
    );
}
