import React from "react";
import { BreadcrumbLink } from "./styles";

export function BreadCrumbItem({ item, link, active = false }) {
    return (
        <BreadcrumbLink active={active} href={link}>
            {item}
        </BreadcrumbLink>
    );
}
