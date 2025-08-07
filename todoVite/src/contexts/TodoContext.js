import React from "react";
import { createContext, useContext,useState } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"To Do",
            completed:false
        }
    ],

    addTodo: (todo) => {},
    upDatedTodo:(id,todo)   => {},
    deleteTodo:(id) => {},
    toggleCompleted:(id) => {}
});

// 2. Custom hook for easy usage
export const useTodo = () => useContext(TodoContext);

// 3. Correct way to export the Provider
export const TodoContextProvider = TodoContext.Provider;