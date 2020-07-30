import React from "react";
import { BreadcrumbLink } from "./styles";

export function BreadCrumbItem({ item, link }) {
    return (
        <BreadcrumbLink active={true} href={link}>
            {item}
        </BreadcrumbLink>
    );
}
