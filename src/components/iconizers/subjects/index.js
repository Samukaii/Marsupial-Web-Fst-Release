import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAtom,
    faBookOpen,
    faBrain,
    faCalculator,
    faFeather,
    faFootballBall,
    faGlobe,
    faHourglassHalf,
    faLanguage,
    faMicroscope,
    faPaintBrush,
    faPencilAlt,
    faPeopleArrows,
    faPhone,
    faTree
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SubjectIcons } from "../../global/static";

library.add([
    faPaintBrush,
    faTree,
    faFootballBall,
    faBrain,
    faAtom,
    faGlobe,
    faHourglassHalf,
    faLanguage,
    faFeather,
    faCalculator,
    faBookOpen,
    faMicroscope,
    faPencilAlt,
    faPeopleArrows,
    faPhone
]);

export function SubjectIconizer(props) {
    if (!SubjectIcons[props.subject]) return <span></span>;
    return (
        <FontAwesomeIcon
            style={{ width: 25, height: 25 }}
            icon={SubjectIcons[props.subject].icon}
            color={SubjectIcons[props.subject].color}
        />
    );
}
