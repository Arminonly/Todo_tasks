import { Container } from 'reactstrap';
import { Button, Form, InputNumber, Typography } from 'antd';
import { UsernamePage } from './registryComponents/UsernamePage';
import { EmailPage } from './registryComponents/EmailPage';
import { PasswordPage } from './registryComponents/PasswordPage';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

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

            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};
