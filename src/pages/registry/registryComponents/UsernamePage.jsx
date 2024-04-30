import { Form, Input} from 'antd';

export const UsernamePage = () => {
    return (
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
    )
}
