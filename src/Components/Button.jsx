import React from 'react';
const Button = (props)=>{
    return(
        <>
            <button className='flex justify-center items-center hover:bg-red-700
            gap-3 px-2 py-2 bg-red-600 border font-montserrat
            text-md mt-5 leading-none  rounded-full w-32 h-12   text-white border-red-600
            '>
            {props.label}
            <img src= {props.iconUrl}  
            alt='arrow right icon'
            className='ml-2 rounded-full w-5 h-5'
            />
            </button>
        </>
    )
}
export default Button;