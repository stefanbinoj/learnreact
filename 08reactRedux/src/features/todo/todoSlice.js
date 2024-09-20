import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState= {
    todos:[{id:1,text:"hello stefan "}]
}



export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            const todo = {
                id:nanoid()
                ,text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos=state.todos.filter((each)=> each.id !== action.payload)
        },
        updateTodo : (state,action) =>{
            state.todos = state.todos.map((each)=>{
                each.id===action.payload.id ? each.text=action.payload.text : each
            })
        }
    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer