import { useState } from "react";

export default function useHandleTask() {
  const [tasks, setTask] = useState([""]);

  const handleAddTask = () => {
    setTask([...tasks, ""]);
  };

  const handleRemoveTask = (index: number) => {
    const UpdatedTasks = [...tasks];
    UpdatedTasks.splice(index, 1);
    setTask(UpdatedTasks);
  };

  return { tasks, handleAddTask, handleRemoveTask, setTask };
}
