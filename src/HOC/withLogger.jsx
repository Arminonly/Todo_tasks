import { TaskCreatorForm } from '../components/TaskCreatorForm';

 const withLogger = (TaskCreatorForm) => {
  return class extends React.Component {
    logAction = (action, payload) => {
      console.log(`Action ${action}, Payload: `, payload);
    };
    render() {
      return <TaskCreatorForm {...this.props} logAction={this.logAction} />;
    }
  };
};
export default withLogger