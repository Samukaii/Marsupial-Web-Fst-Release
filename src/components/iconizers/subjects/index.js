import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import Icons from "../../../config/icons.json";

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

export default function SubjectIconizer(props) {
    if (!Icons[props.subject]) return <span></span>;
    return (
        <FontAwesomeIcon
            style={{ width: 25, height: 25 }}
            icon={Icons[props.subject].icon}
            color={Icons[props.subject].color}
        />
    );
}
