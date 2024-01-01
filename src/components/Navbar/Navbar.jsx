import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-slate-600 flex justify-between items-center px-5 py-3'>
            <h1 className=' font-semibold text-4xl text-slate-50'>TodoList</h1>

            <Link href="/addTask" className=' transition-all px-5 py-3 bg-white text-slate-600 text-base font-semibold hover:bg-slate-800 cursor-pointer hover:text-white' >Add Task</Link>
            
        </div>
    );
};

export default Navbar;