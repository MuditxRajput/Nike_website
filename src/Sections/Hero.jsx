import { useState } from 'react';
import Button from '../Components/Button';
import ShoeCard from '../Components/ShoeCard';
import { shoes, statistics } from "../Constant/index";
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
const Hero=()=>{
     const[bigShoeImg ,setBigShoeImg] =  useState(bigShoe1)
    return(
        <>
        <section
        id="home"
        className="w-full border-0  min-h-screen flex xl:flex-row flex-col
        gap-10 max-container"
        >
        <div className="relative xl:w-2/5 flex flex-col
         justify-center
         w-full max-xl:padding-x pt-28
        
        ">
        <p className='text-xl font-serif text-red-500 mb-10  '>Our Summer Collection</p>
        <h1 className='text-8xl font-sans font-bold max-sm:text-[72px] max-sm:leading[82px]
        
        '>
            <span className='xl:bg-white xl:whitespace-nowrap
            relative z-10 pr-10
            '>The New Arrival</span>
            <br/>
            <span className='text-red-600 inline-block  mt-3 ' >Nike</span> Shoes
        </h1>
        <p className=' font-sans text-gray-700
        text-lg leading-8 mt-6 mb-14 
        sm:max-w-sm
        '>
            Discover stylish Nike arrival, quality
            comfort, and innovation for your
            active life.
        </p>
        <Button label = "Shop Now"
        iconUrl = {arrowRight}
        />
        <div className='flex justify-start items-start
        flex-wrap w-full  mt-20 gap-16
        '>
            {statistics.map((val,index)=>(
                <div key={val.label}>
                <p className='text-4xl font-bold '>{val.value}</p>
                <p className='leading-7 text-grey-500'>{val.label}</p>
                </div>
            ))}
        </div>
        </div>
        <div className=' relative flex-1 flex
         justify-center items-center xl:min-h-screen max-xl:py-40 
         bg-blue-200 bg-hero bg-cover bg-center
        
        '>
            <img src= {bigShoeImg} alt='Big shoes' width={610} height={500} 
            className='  object-contain relative z-10  '
            />
            <div className='flex sm:gap-6 absolute gap-4 -bottom-[5%] sm:left-[10%]
            max-sm:px-6 
            '>
                    {shoes.map((shoe,index)=>(
                        <div id={shoe}  > 
                        <ShoeCard 
                        imgUrl ={shoe}
                        changeBigShoeImage = {(shoe)=>
                                setBigShoeImg(shoe)

                        }
                        bigShoeImage = {bigShoeImg}
                        />
                         </div>
                    ))}
            </div>
        </div>
        </section>
        </>
    )
}
export default Hero;