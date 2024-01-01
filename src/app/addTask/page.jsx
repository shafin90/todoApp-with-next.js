'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { loadData } from '@/components/List/List';
import Swal from 'sweetalert2';
import action from '../actions';


const Page = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);

    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("/api/addTask", { name, description })
            if (res.data.message === "created") {
                // Show SweetAlert success message
                Swal.fire({
                    icon: 'success',
                    title: 'Task Created',
                    text: 'Your task has been successfully created!',
                });

                action();
                router.push('/');
            }
        } catch (error) {
            console.log(error);
            // Show SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while creating the task.',
            });
        }
    }

    return (
        <div style={{ minHeight: "100vh" }} className=" bg-slate-800 w-full h-full position-relative pt-28 ">
            <form onSubmit={submitForm} className=' mx-auto w-3/6 flex flex-col justify-between items-start'>
                <label className=' text-white text-2xl font-semibold mb-4'>Task Name</label>
                <input onChange={e => setName(e.target.value)} className=' px-4 py-2 w-full mb-14' />

                <label className=' text-white text-2xl font-semibold mb-4'>Description</label>
                <textarea onChange={e => setDescription(e.target.value)} rows={5} className=' px-4 py-2 w-full mb-14'></textarea>

                <button className=' bg-slate-50 text-slate-800 font-semibold px-5 py-2 cursor-pointer hover:bg-slate-200'>Submit</button>

            </form>
        </div>
    );
};

export default Page;