import { Container } from 'reactstrap';
import { Form, Typography } from 'antd';
import { UsernamePage } from './registryComponents/UsernamePage';
import { EmailPage } from './registryComponents/EmailPage';
import { PasswordPage } from './registryComponents/PasswordPage';
import { GenderPage } from './registryComponents/GenderPage';
import { AgePage } from './registryComponents/AgePage';
import { formItemLayout } from '../../api/formApi';
import { RegistryButton } from './registryComponents/RegistryButton';
import { Link } from 'react-router-dom';

export const RegistryPage = () => {
  const onFinish = async (values) => {
    const url = 'https://todo-redev.herokuapp.com/api/users/register';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    const data = await res.json();
    console.log('Received values of form: ', data);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Container className="bg-light border" fluid>
        <h3>Страница регистрации</h3>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{
            maxWidth: 600
          }}
          scrollToFirstError
        >
          <UsernamePage />
          <EmailPage />
          <PasswordPage />
          <GenderPage />
          <AgePage />
          <RegistryButton />
        </Form>
        <Typography.Title level={4}>Already have an account? <Link to='/2' > Log In</Link></Typography.Title>
      </Container>
    </>
  );
};
