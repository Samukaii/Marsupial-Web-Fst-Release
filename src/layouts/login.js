import React, { useState } from "react";
import { login } from "../services/api";
import { Input, Logo } from "./styles";
import { Background, Form, ActionButton, Link } from "./styles";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function tryLogin(event) {
        event.preventDefault();

        try {
            await login({ email, password });
            window.location.href = "/app/home";
        } catch (error) {
            event.preventDefault();
            alert(error);
        }
    }

    return (
        <Background>
            <Form>
                <Logo>Marsupial</Logo>
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
                        return tryLogin(event);
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
