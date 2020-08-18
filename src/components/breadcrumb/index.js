import React from "react";
import { Base } from "./styles";

export function BreadCrumb({ children }) {
    return (
        <Base>
            {children.map(item => (
                <>{item}/</>
            ))}
        </Base>
    );
}
