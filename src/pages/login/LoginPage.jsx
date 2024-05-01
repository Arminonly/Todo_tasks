import { Container } from 'reactstrap';
import { Typography, Form} from 'antd';
import { EmailPage } from './loginComponents/EmailPage';
import { PasswordPage } from './loginComponents/PasswordPage';
import { LoginBtn } from './loginComponents/LoginBtn';

export const LoginPage = () => {
  const onFinish = async (values) => {
    const url = 'https://todo-redev.herokuapp.com/api/auth/login';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    const data = await res.json();

    console.log('Received values of data: ', data);
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
          Don't have an account? Sign Up{' '}
        </Typography.Title>
      </Form>
    </Container>
  );
};
