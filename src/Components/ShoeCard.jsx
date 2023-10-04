import React from 'react';
const ShoeCard=(props)=>{
    const handleClick =()=>{
        if(props.bigShoeImage!==props.imgUrl.bigShoe)
        {
            props.changeBigShoeImage(props.imgUrl.bigShoe)
        }
    }
    return(
         <>
         <div className={`border-2 rounded-xl ${props.bigShoeImage===props.imgUrl.bigShoe ? 'border-red-500' : 'border-transparent'} cursor-pointer
         `}
         onClick={handleClick}>
            <div className='bg-blue-300 bg-cover
            sm:w-40 sm:h-40 rounded-xl max-sm:p-4 
            flex justify-center items-center'>
                <img src={props.imgUrl.thumbnail}
                alt='shoe collection'
                width={127}
                height={103}
                className=' object-contain  '
                />
            </div>
                    
         </div>
         </>

    )
}
export default ShoeCard;