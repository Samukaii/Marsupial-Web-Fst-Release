import styled from "styled-components";
import { Common } from "../global/styles";

export const { Link } = Common;
export const { BigTitle: Title, Text } = Common;

const { Container: NotCenterContainer } = Common;

export const Container = styled(NotCenterContainer)`
    align-items: center;
`;
