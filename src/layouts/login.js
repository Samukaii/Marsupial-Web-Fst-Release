import React, {useState} from 'react';
import {Background, Form, Logo} from './styles';
import {Input, ActionButton, Link} from './styles';
import {login} from '../services/api';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function tryLogin(event) {
    event.preventDefault();

    try {
      await login({email, password});
      window.location.href = '/home';
    } catch (error) {
      event.preventDefault();
      alert(error);
    }
  }

  return (
    <Background>
      <Form>
        <Logo>Marsupial</Logo>
        <Input placeholder='Insira seu e-mail' onChange={value => setEmail(value.target.value)} />
        <Input
          type='password'
          placeholder='Insira sua senha'
          onChange={value => setPassword(value.target.value)}
        />
        <ActionButton
          onClick={event => {
            return tryLogin(event);
          }}>
          Entrar
        </ActionButton>
        <Link href='/register'>Ainda não é cadastrado? Cadastre-se</Link>
      </Form>
    </Background>
  );
}
