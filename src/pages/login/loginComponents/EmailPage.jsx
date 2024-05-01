import {  Form, Input } from 'antd';

export const EmailPage = () => {
    return (
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
    )
}
