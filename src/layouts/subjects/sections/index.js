import React, { useState, useEffect } from "react";
import { SubjectsByLink } from "./static";
import {
    Title,
    LineTitle,
    SectionItem,
    ItemsGroup,
    LessonItem
} from "./styles";
import { Api } from "./services";
import { Link } from "react-router-dom";

export default function Sections({ match }) {
    const subjectTitle = SubjectsByLink[match.params.subjectlink].title;
    const url = match.url;
    const [sections, setSections] = useState([]);
    const [lessons, setLessons] = useState([
        { title: "Alguma Aula", link: "algumaaula" },
        { title: "Alguma Aula", link: "algumaoutraaula" },
        { title: "Alguma Aula", link: "maisumaaula" },
        { title: "Alguma Aula", link: "aquioutraaula" }
    ]);

    useEffect(() => {
        getSections();
    }, []);

    async function getSections() {
        const { data } = await Api.get("admin/sections");
        setSections(data.docs);
    }

    function renderLessons(lesson) {
        return (
            <LessonItem
                to={{
                    pathname: `${url}/${lesson.link}/videos`,
                    state: { lesson }
                }}
            >
                <p>{lesson.title}</p>
            </LessonItem>
        );
    }

    function renderSections(section) {
        if (section.subject === subjectTitle)
            return (
                <SectionItem>
                    <p>{section.title}</p>
                    <LineTitle></LineTitle>
                    <ItemsGroup>{lessons.map(renderLessons)}</ItemsGroup>
                </SectionItem>
            );
    }

    return (
        <div>
            <Title>{subjectTitle}</Title>
            <LineTitle></LineTitle>
            {sections.map(renderSections)}
        </div>
    );
}
