import React from 'react';
import { TaskProvider, useTaskContext } from '../context/TaskContext';
import TaskContainer from './TaskContainer';
import Buttons from './Buttons';

export default function AddTask() {
    const { tasks, dispatch } = useTaskContext();

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.elements.taskInput;

        if (input.value.trim() !== '') {
            dispatch({ type: 'addTask', payload: input.value });
            input.value = '';
            return;
        }
    }

    return (
        <section className='w-screen min-h-screen p-20 space-y-6'>
            <h1 className='text-3xl font-semibold'>Todos</h1>

            <form onSubmit={handleSubmit} className='space-x-4'>
                <input name='taskInput' type="text" placeholder='Add new task' autoComplete='off' className='border border-black p-1.5 rounded-md w-96' />
                <button className='bg-slate-100'>Add</button>
            </form>

            <section className='flex space-x-6 w-full'>

                <TaskContainer direction='left' heading='Incomplete Task' />
                <Buttons />
                <TaskContainer direction='right' heading='Completed Task' />

            </section>
        </section>
    )
}