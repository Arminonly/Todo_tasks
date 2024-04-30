import { Button, Form } from 'antd';
import { tailFormItemLayout } from '../../../api/formApi';


export const RegistryButton = () => {
  return (
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit" block>
        Register
      </Button>
    </Form.Item>
  );
};
