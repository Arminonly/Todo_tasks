import { Button, ConfigProvider, Input } from 'antd';

export const TaskCreatorForm = ({logAction, text, setText, handleSubmit, colors2, getHoverColors, getActiveColors
}) => {

const onHandleSubmit = e =>{
  logAction('add text', text)
  handleSubmit(e)
}

  return (
    <div style={{ marginBottom: 20 }}>
      <form 
      onSubmit={onHandleSubmit}

      >
        <Input
          style={{ width: 300 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                  colors2
                ).join(', ')})`,
                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                  colors2
                ).join(', ')})`,
                lineWidth: 0
              }
            }
          }}
        >
          <Button
            style={{ marginLeft: 15 }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            add task
          </Button>
        </ConfigProvider>
      </form>
    </div>
  );
};
