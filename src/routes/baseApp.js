/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { BaseApp } from "../components";
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

    useEffect(() => {
        TweenMax.to(card.current, 2, {
            x: 50
        });
        labelItems.current = sideBar.current.getElementsByClassName("Label");
    }, []);
    function hideOrShowMenu() {
        isExpandedMenu ? retractMenu() : expandMenu();
    }

    function retractMenu() {
        setIsExpandedMenu(false);
        TweenMax.to(labelItems.current, 0.6, {
            opacity: 0,
            width: 0
        });
    }
    function expandMenu() {
        setIsExpandedMenu(true);
        TweenMax.to(labelItems.current, 0.6, {
            opacity: 100,
            width: 100
        });
    }

    return (
        <>
            <Switch>
                <BaseApp
                    reference={sideBar}
                    card={card}
                    hideOrShowMenu={hideOrShowMenu}
                >
                    <Route exact path={`${path}/home`} component={Home} />
                    <Route path={`${path}/admin`} component={Admin} />
                    <Route
                        exact
                        path={`${path}/materias`}
                        component={Subjects}
                    />
                    <Route
                        exact
                        path={`${path}/materias/:subjectlink`}
                        component={Sections}
                    />
                </BaseApp>
            </Switch>
        </>
    );
}
