import { Container } from 'reactstrap';
import { Button, Form, Input, Select, InputNumber, Typography } from 'antd';
const { Option } = Select;

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
          <Form.Item
            name="username"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
                whitespace: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!'
              }
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Please select age!'
              }
            ]}
          >
            <InputNumber
              style={{
                width: '100%'
              }}
            />
          </Form.Item>
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
