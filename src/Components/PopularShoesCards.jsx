import React from 'react';
import { star } from '../assets/icons';
const PopularShoesCards=(props)=>{
    return(
        <>
        <div className='  flex flex-1 flex-col
         w-full max-sm:w-full
        '>
            <img src={props.img} alt='images'
            className='w-[280px] h-[280px]'
            />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img src = {star} alt='rating' 
                width={24} height={24}
                />
                <p className='text-xl text-slate-600 '>(4.5)</p>
               
            </div>
            <h3 className='mt-3 text-2xl leading-normal font-semibold '>{props.name}</h3>
            <p className='mt-2 font-semibold text-red-400'>{props.price}</p>
        </div>
       
        </>
    )
}
export default PopularShoesCards