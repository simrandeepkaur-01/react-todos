import React, { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducer/TaskReducer";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    return useContext(TaskContext);
}