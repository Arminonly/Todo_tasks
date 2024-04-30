import { Form, InputNumber } from 'antd';

export const AgePage = () => {
  return (
    <Form.Item
      name="age"
      label="Возраст"
      rules={[
        {
          required: true,
          message: 'Укажите ваш возраст!'
        }
      ]}
    >
      <InputNumber
        style={{
          width: '100%'
        }}
      />
    </Form.Item>
  );
};
