import { Form, Input} from 'antd';

export const UsernamePage = () => {
    return (
        <Form.Item
        name="username"
        label="Ник"
        tooltip="Укажите как к Вам можно обращаться?"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, укажите Ваш ник!',
            whitespace: true
          }
        ]}
      >
        <Input />
      </Form.Item>
    )
}
