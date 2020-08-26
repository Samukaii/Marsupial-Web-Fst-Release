import React, { useState, useEffect } from "react";
import { SubjectsByLink } from "./static";
import { BreadCrumb, BreadCrumbItem } from "./components";
import {
    Title,
    LineTitle,
    SectionItem,
    ItemsGroup,
    LessonItem,
} from "./styles";
import { Api } from "./services";
import { Link } from "react-router-dom";

export default function Sections({ match }) {
    const subjectTitle = SubjectsByLink[match.params.subjectlink].title;
    const url = match.url;
    const [sections, setSections] = useState([]);
    const [lessons, setLessons] = useState([
        { title: "Alguma Aula", link: "algumaaula", sectionId: "" },
        { title: "Alguma Aula", link: "algumaoutraaula", sectionId: "" },
        { title: "Alguma Aula", link: "maisumaaula", sectionId: "" },
        { title: "Alguma Aula", link: "aquioutraaula", sectionId: "" },
    ]);

    useEffect(() => {
        getSections();
        getLessons();
    }, []);

    async function getSections() {
        const { data } = await Api.get(
            `admin/sections?subject=${subjectTitle}`
        );
        setSections(data.docs);
    }
    async function getLessons() {
        const { data } = await Api.get(`admin/lessons`);
        setLessons(data.docs);
    }

    function renderLessons(lesson, sectionId) {
        if (lesson.section !== sectionId) return;
        return (
            <LessonItem
                to={{
                    pathname: `${url}/${getLinkLesson(lesson.title)}/videos`,
                    state: { lesson },
                }}
            >
                <p>{lesson.title}</p>
            </LessonItem>
        );
    }

    function getLinkLesson(lessonTitle = "") {
        lessonTitle = lessonTitle.toLowerCase();
        return lessonTitle.replace(" ", "");
    }

    function renderSections(section) {
        if (section.subject === subjectTitle)
            return (
                <SectionItem>
                    <p>{section.title}</p>
                    <LineTitle></LineTitle>
                    <ItemsGroup>
                        {lessons.map((lesson) => {
                            return renderLessons(lesson, section._id);
                        })}
                    </ItemsGroup>
                </SectionItem>
            );
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <BreadCrumb>
                    <BreadCrumbItem item="Matérias" link="/app/materias" />
                    <BreadCrumbItem
                        item={subjectTitle}
                        link="#"
                        active="true"
                    />
                </BreadCrumb>
            </div>

            <Title>{subjectTitle}</Title>
            <LineTitle></LineTitle>
            {sections.map(renderSections)}
        </div>
    );
}
