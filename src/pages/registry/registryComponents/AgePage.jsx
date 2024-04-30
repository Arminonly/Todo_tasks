import { Form, InputNumber } from 'antd';

export const AgePage = () => {
  return (
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
  );
};
