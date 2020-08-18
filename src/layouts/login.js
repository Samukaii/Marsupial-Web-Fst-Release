import React, { useState } from "react";
import { login } from "../services/api";
import { Input, Logo } from "./styles";
import { Background, Form, ActionButton, Link } from "./styles";
import { Loading, HiddenMessage } from "./styles";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let showMessage = () => {};

    async function tryLogin(event) {
        event.preventDefault();

        try {
            setIsLoading(true);
            await login({ email, password });
            setIsLoading(false);
            window.location.href = "/app/home";
        } catch ({ error }) {
            setIsLoading(false);
            showErrorMessage(error.message);
        }
    }

    function showErrorMessage(message) {
        setErrorMessage(message);
        showMessage();
    }

    return (
        <Background>
            <Form>
                <HiddenMessage
                    receiveShow={(Show = () => {}) => {
                        showMessage = Show;
                    }}
                >
                    {errorMessage}
                </HiddenMessage>
                <Logo>Marsupial</Logo>
                <Loading isLoading={isLoading}>
                    Tentanto entrar na sua conta
                </Loading>
                <Input
                    placeholder="Insira seu e-mail"
                    onChange={value => setEmail(value.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    onChange={value => setPassword(value.target.value)}
                />
                <ActionButton
                    onClick={event => {
                        event.preventDefault();
                        tryLogin(event);
                    }}
                >
                    Entrar
                </ActionButton>
                <Link href="/register">
                    Ainda não é cadastrado? Cadastre-se
                </Link>
            </Form>
        </Background>
    );
}
