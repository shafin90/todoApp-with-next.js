'use client'
import action from '@/app/actions';
import axios from 'axios';
import React from 'react';
import { MdDelete } from 'react-icons/md';


const DeleteButton =  ({id}) => {
    
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/DeeleteTask/${id}`);
            console.log(id)
            action();
      
        } catch (error) {
            console.error(error);
        }
     
    }

    return (
        <div>
            <MdDelete onClick={handleDelete} className=' text-red-900 text-2xl hover:text-red-800 cursor-pointer hover:scale-110' />
        </div>
    );
};

export default DeleteButton;