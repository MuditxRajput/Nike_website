import { offer } from '../assets/images';
const SpecialOffer=()=>{
  return(
      <>
      <section className="max-container flex 
      justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container
      " >
        <div className=' flex-1 '>
          <img src={offer} alt='offer' height={687} width={773} 
          className='object-contain w-full'
          />
        </div>
        <div className=' flex flex-1 flex-col '>
          <h2 className='text-7xl font-bold  '>
            <span className='text-red-600' >Special</span> Offer Shoes
          </h2>
          <p className='mt-4 max-w-lg text-slate-500'>
              Ensuring premium comfort and style, our meticulously <br/>
              crafted footwear is designed to elevated your expirence, <br/>
              providing you with unmatched quality, innovation,and a <br/>
              touch of elegance.

          </p>
          <div className='flex flex-row gap-14  mt-10 items-center '>
          <button className="bg-red-500 w-28 h-10 rounded-full mt-4 text-white hover:bg-red-700  "> Shop Now </button>
          <button className="  border-2 border-red-500 w-28 h-10 rounded-full mt-4 text-black hover:bg-red-200  ">Learn More </button>

          </div>
        </div>
      </section>
      </>
  )
}
export default SpecialOffer;