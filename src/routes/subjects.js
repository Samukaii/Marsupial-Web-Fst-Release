/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { BaseApp } from "../components";
import Home from "../layouts/subjects";
import gsap, { TweenMax } from "gsap";
import Home from "../layouts/home";
import Admin from "./admin";
import CSSPlugin from "gsap/CSSPlugin";
import Subjects from "../layouts/subjects";
import Sections from "../layouts/subjects/sections";

gsap.registerPlugin(CSSPlugin);

export default function() {
    const { path } = useRouteMatch();
    let card = useRef(null);
    let sideBar = useRef(null);
    let labelItems = useRef(null);

    const [isExpandedMenu, setIsExpandedMenu] = useState(true);

    return (
        <>
            <Switch>
                <Route exact path={`${path}`} component={Home} />
                <Route path={`${path}/admin`} component={Admin} />
                <Route exact path={`${path}/materias`} component={Subjects} />
                <Route
                    exact
                    path={`${path}/materias/:subjectlink`}
                    component={Sections}
                />
            </Switch>
        </>
    );
}
