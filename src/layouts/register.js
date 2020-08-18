import React, { useState } from "react";
import { Background, Form, Logo, Loading, HiddenMessage } from "./styles";
import { Input, ActionButton, Link } from "./styles";
import { register } from "../services/api";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState();

    const [message, setMessage] = useState("");
    let showMessage;

    async function tryRegister(event) {
        event.preventDefault();
        if (!validateEmail()) return;
        if (!validatePassword()) return;

        try {
            setIsLoading(true);
            await register({ email, password, name });
            setIsLoading(false);
            window.location.href = "app/home";
        } catch ({ message }) {
            setIsLoading(false);
            showErrorMessage(message);
            console.log(message);
        }
    }

    function showErrorMessage(errorMessage) {
        setMessage(errorMessage);
        showMessage();
    }

    const validatePassword = () => {
        if (password !== repeatPassword) {
            showErrorMessage("Senhas não coincidem");
            return false;
        }
        if (password.length < 4) {
            showErrorMessage(
                "Senha muito curta, a senha deve ter pelo menos 4 caracteres"
            );
            return false;
        }
        if (!password.match(/\d/)) {
            showErrorMessage("A senha deve possuir números");
            return false;
        }
        return true;
    };
    const validateEmail = () => {
        if (!email.match(/@/) || email.length < 4) {
            showErrorMessage("Email inválido");
            return false;
        }
        return true;
    };

    return (
        <Background>
            <Form>
                <HiddenMessage receiveShow={Show => (showMessage = Show)}>
                    {message}
                </HiddenMessage>
                <Logo>Marsupial</Logo>
                <Loading isLoading={isLoading}>
                    Estamos tentando registrar sua conta...
                </Loading>
                <Input
                    placeholder="Insira seu nome"
                    onChange={value => setName(value.target.value)}
                />
                <Input
                    placeholder="Insira seu e-mail"
                    onChange={value => setEmail(value.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Insira sua senha"
                    onChange={value => setPassword(value.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Repita sua senha"
                    onChange={value => setrepeatPassword(value.target.value)}
                />

                <ActionButton onClick={tryRegister}>Cadastrar-se</ActionButton>
                <Link href="/login">
                    Já está cadastrado(a)? faça o login aqui
                </Link>
            </Form>
        </Background>
    );
}
