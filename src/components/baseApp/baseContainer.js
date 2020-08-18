import React from "react";
import { HeaderDashboard, Content } from "./styles";
import { Dashboard as Base, HideShowMenu } from "./styles";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../config/styles";

export default function BaseContainer(props) {
    return (
        <Base>
            <HeaderDashboard>
                <HideShowMenu onClick={props.hideOrShowMenu}>
                    <FaIcon
                        icon={faBars}
                        color={Colors.sideBar}
                        size="2x"
                        style={{ width: 20 }}
                    />
                </HideShowMenu>
            </HeaderDashboard>
            <Content>{props.children}</Content>
        </Base>
    );
}
