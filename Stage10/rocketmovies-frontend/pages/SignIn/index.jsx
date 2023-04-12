import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn(formData);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies </h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
 
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
