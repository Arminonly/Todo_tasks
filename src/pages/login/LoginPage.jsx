import { Container } from 'reactstrap';
import { Button, Typography, Form, Input } from 'antd';

export const LoginPage = () => {
  const onFinish = async values => {
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
        <Form.Item
          name="email"
          label="Почта"
          rules={[
            {
              type: 'email',
              message: 'Введите правильный E-mail!'
            },
            {
              required: true,
              message: 'Пожалуйста, укажите ваш E-mail!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите пароль!'
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
        <Typography.Title level={4}>
          Don't have an account? Sign Up{' '}
        </Typography.Title>
      </Form>
    </Container>
  );
};
