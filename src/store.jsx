import { createStore } from "redux";

const at = 'add_task';
const dl = 'delete_task';
const up = 'update_task';

export const addtask = (task) => ({
    type: at,
    payload: task
})
export const deletetask = (id) => ({
    type: dl,
    payload: id
})
export const updatetask = (task) => ({
    type: up,
    payload: task
})

const initState = { tasks: []}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case at:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case dl:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload)};
        case up:
            return { ...state, tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, task: action.payload.task } : task) };
        default:
            return state;
    }
}

export const store = createStore(reducer);