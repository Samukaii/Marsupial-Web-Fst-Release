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

export default function Sections({ match }) {
    const subjectTitle = SubjectsByLink[match.params.subjectlink].title;
    const [sections, setSections] = useState([]);
    const [lessons, setLessons] = useState([
        { title: "Alguma Aula" },
        { title: "Alguma Aula" },
        { title: "Alguma Aula" },
        { title: "Alguma Aula" },
        { title: "Alguma Aula" }
    ]);

    useEffect(() => {
        getSections();
    }, []);

    async function getSections() {
        const { data } = await Api.get("admin/sections");
        setSections(data.docs);
    }

    function renderLessons(Lesson) {
        return (
            <LessonItem>
                <p>{Lesson.title}</p>
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
