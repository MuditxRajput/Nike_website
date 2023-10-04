import PopularShoesCards from '../Components/PopularShoesCards';
import { products } from '../Constant/index';
const PopularProducts=()=>{
  return(
      <>
        <section className="max-container max-sm:mt-12">
       <div className="flex flex-col justify-start gap-5 ">
       <h3 className=' text-6xl font-bold '>Our <span className='text-red-500 text-6xl '> Popular </span> Products</h3>
        <p className='mt-5 text-slate-500 text-2md   '>Expirence top-notch quality and style with 
          out sought-after selection. 
          <br/>Discover a world
          of comfort,design, and value.
        </p>
       </div>
       <div className=" mt-16 grid lg:grid-col-4 md:grid-cols-4
       sm:grid-col-2 grid-col-1 sm:gap-4 gap-14 
       
       ">
        {products.map((shoe)=>(
        
          
          <PopularShoesCards
          id ={shoe.name}
          img = {shoe.imgURL}
          name = {shoe.name}
          price = {shoe.price}

          />

        ))}
       </div>
        </section>
      
      
      </>
  )
}
export default PopularProducts;