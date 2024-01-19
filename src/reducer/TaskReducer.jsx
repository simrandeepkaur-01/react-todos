export default function taskReducer(state, action) {
    switch (action.type) {
        case 'addTask':
            return [...state,
            {
                id: Date.now(),
                taskName: action.payload,
                isCompleted: false,
                direction: 'left'
            }];
        case 'toggleTask':
            return state.map((task) =>
                task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task
            );
        case 'rightButton':
            return state.map((task) =>
                task.isCompleted ? { ...task, direction: 'right' } : task
            );
        case 'leftButton':
            return state.map((task) =>
                !task.isCompleted ? { ...task, direction: 'left' } : task
            )
        default:
            return state;
    }
}