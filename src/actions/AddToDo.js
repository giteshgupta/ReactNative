import {ADD_TODO} from './actionTypes'
import { DELETE_TODO } from './actionTypes'

export const addToDo=(text)=>({
    
        type: ADD_TODO,
        text,
    
})
