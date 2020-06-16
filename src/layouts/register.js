import React, {useState} from 'react';
import {Background, Form, Logo} from './styles';
import {Input, ActionButton, Link} from './styles';
import {register} from '../services/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState();
  const [name, setName] = useState();

  async function tryRegister(event) {
    event.preventDefault();
    if (!validateEmail()) return;
    if (!validatePassword()) return;

    await register({email, password, name});
    //window.location.href = '/home';
  }

  const validatePassword = () => {
    if (password !== repeatPassword) {
      alert('Senhas não coincidem');
      return false;
    }
    if (password.length < 4) {
      alert('Senha muito curta, a senha deve ter pelo menos 4 caracteres');
      return false;
    }
    if (!password.match(/\d/)) {
      alert('A senha deve possuir números');
      return false;
    }
    return true;
  };
  const validateEmail = () => {
    if (!email.match(/@/) || email.length < 4) {
      alert('Email inválido');
      return false;
    }
    return true;
  };

  return (
    <Background>
      <Form>
        <Logo>Marsupial</Logo>

        <Input placeholder='Insira seu nome' onChange={value => setName(value.target.value)} />
        <Input placeholder='Insira seu e-mail' onChange={value => setEmail(value.target.value)} />

        <Input
          type='password'
          placeholder='Insira sua senha'
          onChange={value => setPassword(value.target.value)}
        />
        <Input
          type='password'
          placeholder='Repita sua senha'
          onChange={value => setrepeatPassword(value.target.value)}
        />

        <ActionButton onClick={tryRegister}>Cadastrar-se</ActionButton>
        <Link href='/login'>Já está cadastrado(a)? faça o login aqui</Link>
      </Form>
    </Background>
  );
}
