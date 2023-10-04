import { shoe8 } from '../assets/images';

const Superquality=()=>{
    return(
        <>
        <div className="flex flex-row justify-between items-center max-lg:flex-col
        gap-10 w-full max-container
        ">
            <div className="flex flex-1 flex-col ">
                <h2 className="text-7xl font-bold  ">We Provide You <span className="text-red-600">Super <br/> Quality </span> Shoes </h2>
                <p className="mt-5 text-slate-500 lg:max-w-lg ">Ensuring premium comfort and style, our meticulously<br/>
                    crafted footwear is designed to elevated your expirence,<br></br>
                    providing you with unmatched quality, inncovation, and a <br/>
                    touch of elegance.
                </p>
                <button className="bg-red-500 w-28 h-10 rounded-full mt-4 text-white hover:bg-red-700  ">View details </button>
            </div>
            <div className="flex flex1 justify-center items-center ">
                <img src ={shoe8} alt='Shoes' width={570} 
                height={522} 
                className='object-contain rounded-sm' />
            </div>
        </div>
        </>
    )
  }
  export default Superquality;