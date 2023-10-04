import { star } from '../assets/icons';
const ReviewCard=(props)=>{
    return (
        <>
        <div className=''>
        <div className=" flex justify-center flex-col items-center">
                <img src = {props.img}
                height={120} width={120} 
                className="rounded-full"
                />
                <p className='mt-16 max-w-sm text-center '>{props.feedback}</p>

        </div >
        <div  className='mt-3  flex justify-center items-center gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain m-0' />
            <p className='text-xl text-slate-500'>{props.rating}</p>
        </div>
        <h3 className='mt-1 text-3xl text-center font-bold'>{props.name}</h3>
        </div>
        </>
    )
}
export default ReviewCard;