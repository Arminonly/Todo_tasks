import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Form, message, Flex, Spin } from 'antd';
import { EmailPage } from './loginComponents/EmailPage';
import { PasswordPage } from './loginComponents/PasswordPage';
import { LoginBtn } from './loginComponents/LoginBtn';

export const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const url = 'https://todo-redev.herokuapp.com/api/auth/login';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    const data = await res.json();
    let token = data.token;
    localStorage.setItem('todoToken',token)
    if (!token) {
      setTimeout(() => {
        message.error(
          'Что то пошло не так((( Проверьте правильность Вашего email. Попытайтесь снова)))',
          5
        );
      }, 800);
    } else {
      navigate('/todos');
    }
  };
  return (
    <Container className="bg-light border" fluid>
      <h4>LoginPage</h4>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <EmailPage />
        <PasswordPage />
        <LoginBtn />
        <Typography.Title level={4}>
          Don't have an account? <Link to={'/reg'}> Sign Up </Link>
        </Typography.Title>
      </Form>
    </Container>
  );
};
