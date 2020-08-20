import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Sections from "../layouts/admin/sections";
import Videos from "../layouts/admin/videos";
import Lessons from "../layouts/admin/lessons";
import welcomeAdmin from "../layouts/admin";

export default function Admin() {
    const { path } = useRouteMatch();
    console.log(path);
    return (
        <>
            <Switch>
                <Route exact path={path} component={welcomeAdmin} />
                <Route exact path={`${path}/sections`} component={Sections} />
                <Route exact path={`${path}/videos`} component={ValidateVideoRoute} />
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
    const { state } = location;

    if (!state) return <Redirect to="sections" />;

    const { id_section } = state;

    if (!id_section) return <Redirect to="sections" />;
    return <Lessons idSection={id_section} />;

}
function ValidateVideoRoute({ location }) {
    const { state } = location;

    if (!state) return <Redirect to="sections" />;

    const { id_lesson } = state;

    if (!id_lesson) return <Redirect to="sections" />;
    return <Videos idLesson={id_lesson} />;

}
