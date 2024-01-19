import React from 'react'
import { useTaskContext } from '../context/TaskContext'

export default function TaskContainer({ direction, heading }) {
    const { tasks, dispatch } = useTaskContext();

    const handleStatus = (e) => {
        const taskId = parseInt(e.target.id);
        dispatch({ type: 'toggleTask', payload: taskId });
    };

    return (
        <div className='shadow flex-1 bg-slate-100 rounded-xl p-2  w-96'>
            <h2 className='text-xl font-semibold text-center text-gray-700'>{heading}</h2>
            <ul className='space-y-2' >
                {
                    tasks.map((task) => (
                        task.direction === direction && (
                            <li key={task.id} className='space-x-2 flex items-center'>
                                <input onChange={handleStatus} checked={task.isCompleted} type="checkbox" name={task.id} id={task.id} />
                                <label htmlFor={task.id}>{task.taskName}</label>
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    )
}