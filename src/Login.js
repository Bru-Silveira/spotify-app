import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Para redirecionar após login
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const senhaRegex = /^.{6}$/;

    if(!emailRegex.test(email)) {
        setErrorMessage('Por favor, insira um email válido');
        return;
    }
    if(!senhaRegex.test(senha)) {
        setErrorMessage('A senha deve ter exatamente 6 caracteres');
        return;
    }
    setErrorMessage('');
    navigate('/Playlists');
  };

  return (
    <Container className="login-container">
        <Row className="justify-content-center">
            <Col md={6}>
                <div className="title-container">
                    <img src="/logoSpotify.png" alt="Spotify Logo" className="logo" />
                    <h2 className="title-login">Spotify</h2>
                </div>
                {errorMessage && <p className="text-error">{errorMessage}</p>}
                <Form onSubmit={handleLogin} className='form-container'>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className='form-input-email'
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
  
                    <Form.Group controlId="formSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            className='form-input-senha'
                            type="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" type="submit" className='buttonEntrar'>
                        Entrar
                    </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Login;
