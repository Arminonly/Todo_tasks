import {  Form, Input } from 'antd';


export const PasswordPage = () => {
    return (
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
    )
}
