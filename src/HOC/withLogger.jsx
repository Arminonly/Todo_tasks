import { TaskCreatorForm } from "../components/TaskCreatorForm";

export const withLogger = TaskCreatorForm => {
  return props => {
    const logAction = (action, payload) => {
      console.log(`Action: ${action}, Payload`, payload);
    }
    return <TaskCreatorForm {...props} logAction={logAction}  />
  };
};
