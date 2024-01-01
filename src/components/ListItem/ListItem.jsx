'use client'

import React from 'react';
import { GrUpdate } from "react-icons/gr";

import DeleteButton from '../DeleteButton/DeleteButton';


const ListItem = ({ name, description, id }) => {


    return (
        <div className=' w-full flex justify-between items-center border-b border-slate-400 px-7 py-5 bg-slate-200 hover:bg-slate-300 transition-all'>

            {/* Name and description */}
            <div >
                <h1 className=' font-bold text-slate-800 text-2xl'>{name}</h1>
                <article className='  pe-11 '> {description} </article>
            </div>


            {/* Buttons */}
            <div className=' flex justify-between items-center'>
                <DeleteButton id={id}></DeleteButton>
                <GrUpdate className=' hover:rotate-45 transition-all ms-3 text-green-900 text-xl hover:text-green-800 cursor-pointer' />
            </div>

        </div>
    );
};

export default ListItem;