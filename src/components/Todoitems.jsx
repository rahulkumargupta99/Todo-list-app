import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-4 justify-between bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200'>
      <div onClick={() => { toggle(id) }} className='flex items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt="" className='w-7 transform transition-transform duration-200 hover:scale-110' />
        <p className={`text-gray-800 ml-4 text-[17px] ${isComplete ? "line-through text-gray-500" : ""}`}>{text}</p>
      </div>
      <img onClick={() => { deleteTodo(id) }} src={delete_icon} alt="Delete" className='w-4 cursor-pointer ml-4 opacity-80 hover:opacity-100 transform transition-transform duration-200 hover:scale-110' />
    </div>
  );
}

export default Todoitems;
