import React from "react";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <AddTask />
    </TaskProvider>
  );
};

export default App;