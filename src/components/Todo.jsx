import React, { useState, useRef, useEffect } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            });
        });
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-2xl'>
            {/* ----------- title ---------- */}
            <div className='flex items-center mt-7 gap-3 justify-center'>
                <img className='w-10' src={todo_icon} alt="Todo Icon" />
                <h1 className='text-4xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl'>
                    To-Do List
                </h1>
            </div>
            {/* ----------- input box ---------- */}
            <div className='flex items-center my-7 bg-white rounded-full overflow-hidden shadow-md'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 text-gray-700 placeholder:text-gray-500' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-gradient-to-r from-green-400 to-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer transition-transform duration-200 transform hover:scale-105'>
                    Add +
                </button>
            </div>
            {/* ----------- todo list ---------- */}
            <div className='space-y-3'>
                {todoList.map((item, index) => {
                    return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />;
                })}
            </div>
        </div>
    );
}

export default Todo;
