import { Button, Form} from 'antd';

export const LoginBtn = () => {
    return (
        
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
    )
}
