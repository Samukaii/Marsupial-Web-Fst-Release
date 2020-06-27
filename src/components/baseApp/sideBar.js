import React from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faAtom,
    faCog,
    faChartLine as faChart,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { NavMenus, NavMenuItems as Items } from "./styles";
import { LabelMenuItems as LabelItem, MenuIcon } from "./styles";
import { SideBar as Side } from "./styles";
import { Colors } from "../global/colors";

export default function SideBar(props) {
    return (
        <Side ref={props.reference}>
            <NavMenus>
                <Items className="MenuItem" href="/">
                    <MenuIcon>
                        <FaIcon
                            icon={faHome}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Home</LabelItem>
                </Items>
                <Items className="MenuItem" href="/app/admin">
                    <MenuIcon>
                        <FaIcon
                            icon={faUser}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Administrador</LabelItem>
                </Items>
                <Items className="MenuItem" href="/materias">
                    <MenuIcon>
                        <FaIcon
                            icon={faAtom}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Matérias</LabelItem>
                </Items>
                <Items className="MenuItem" href="/desempenho">
                    <MenuIcon>
                        <FaIcon
                            icon={faChart}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Desempenho</LabelItem>
                </Items>
                <Items className="MenuItem" href="/configuracoes">
                    <MenuIcon>
                        <FaIcon
                            icon={faCog}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Configurações</LabelItem>
                </Items>
            </NavMenus>
        </Side>
    );
}
