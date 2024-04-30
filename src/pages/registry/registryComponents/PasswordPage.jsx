import {  Form, Input } from 'antd';


export const PasswordPage = () => {
    return (
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
    )
}
