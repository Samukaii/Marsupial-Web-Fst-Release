import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { MainSections, EditSections } from "./sections/index";
import welcomeAdmin from "./welcomeAdmin/index";

export default function Admin() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Switch>
        <Route exact path={path} component={welcomeAdmin} />
        <Route exact path={`${path}/sections`} component={MainSections} />
        <Route path={`${path}/sections/edit/:id`} component={EditSections} />
      </Switch>
    </>
  );
}
