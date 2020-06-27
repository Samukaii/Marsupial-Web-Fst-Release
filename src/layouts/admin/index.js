import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Sections from "./sections";
import Lessons from "./lessons";
import welcomeAdmin from "./admin/index";

export default function Admin() {
    const { path } = useRouteMatch();
    console.log(path);
    return (
        <>
            <Switch>
                <Route exact path={path} component={welcomeAdmin} />
                <Route exact path={`${path}/sections`} component={Sections} />
                <Route
                    exact
                    path={`${path}/lessons`}
                    component={ValidateLessonRoute}
                />
            </Switch>
        </>
    );
}

function ValidateLessonRoute({ location }) {
    const { id_section } = location.state;

    if (!id_section) return <Redirect to="admin/sections" />;

    return <Lessons idSection={id_section} />;
}
