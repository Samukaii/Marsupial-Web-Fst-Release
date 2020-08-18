import { ContentCard, CardItem } from "./styles";
import React from "react";

export default function Home() {
    return (
        <>
            <ContentCard>
                <CardItem> Linguagens e suas Tecnologias</CardItem>
                <CardItem> Ciências Humanas</CardItem>
            </ContentCard>
            <ContentCard>
                <CardItem> Matemática</CardItem>
                <CardItem> Redação</CardItem>
            </ContentCard>
        </>
    );
}
