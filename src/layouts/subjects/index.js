import React from "react";
import { SubjectItems, LineTitle, Title, ItemsGroup } from "./styles";
import { SubjectsInfo } from "./static";
import { SubjectIconizer } from "./components";

export default function subjects({ match }) {
    function renderSubjects(subject, index) {
        return (
            <SubjectItems href={`${match.url}/${subject.link}`}>
                <SubjectIconizer
                    subject={subject.title}
                    style={{ width: 50, height: 50 }}
                />
                <p>{subject.title}</p>
            </SubjectItems>
        );
    }
    return (
        <div>
            <Title>Matérias</Title>
            <LineTitle></LineTitle>
            <ItemsGroup>{SubjectsInfo.map(renderSubjects)}</ItemsGroup>
        </div>
    );
}
