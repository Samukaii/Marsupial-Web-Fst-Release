import React from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faAtom,
    faCog,
    faChartLine as faChart,
    faUser,
    faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { NavMenus, NavMenuItems as Items } from "./styles";
import {
    LabelMenuItems as LabelItem,
    MenuIcon,
    NavMenuItemsButton as ItemsButton
} from "./styles";
import { SideBar as Side } from "./styles";
import { Colors } from "../global/colors";
import { logout } from "../global/services";

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
                <Items className="MenuItem" href="/app/materias">
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
                <Items className="MenuItem" href="/app/desempenho">
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
                <Items className="MenuItem" href="/app/configuracoes">
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
                <ItemsButton
                    className="MenuItem"
                    onClick={() => {
                        logout();
                    }}
                >
                    <MenuIcon>
                        <FaIcon
                            icon={faPowerOff}
                            color={Colors.background}
                            size="2x"
                            style={{ width: 30 }}
                        />
                    </MenuIcon>
                    <LabelItem className="Label">Sair</LabelItem>
                </ItemsButton>
            </NavMenus>
        </Side>
    );
}
