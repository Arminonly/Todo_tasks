import { Form, Select } from 'antd';
const { Option } = Select;

export const GenderPage = () => {
  return (
    <Form.Item
      name="gender"
      label="Пол"
      rules={[
        {
          required: true,
          message: 'Пожалуйста - укажите Ваш пол!'
        }
      ]}
    >
      <Select placeholder="выберите пол">
        <Option value="male">Мужской</Option>
        <Option value="female">Женский</Option>
      </Select>
    </Form.Item>
  );
};
