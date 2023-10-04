import ReviewCard from '../Components/ReviewCard';
import { reviews } from '../Constant/index';
const CustomerReviews=()=>{
  return(
      <>
      <section className="max-container">
      <h3 className="text-center text-6xl font-bold ">What Our <span className="text-red-600"> Customer </span> Say?</h3>
      <p className="text-center mt-5 text-slate-500 ">Hear genuine stories from our<br/> 
        satisfied customer about their 
        exceptional expirence with us.<br/>
      </p>
      <div className="  mt-24 flex flex-row justify-evenly items-center
       
       flex-1 gap-14 max-lg:flex-col ">
          {reviews.map((review)=>(
              <ReviewCard
              key={review.customerName}
              img = {review.imgURL}
              name = {review.customerName}
              rating = {review.rating}
              feedback = {review.feedback}
              />
          ))}
         
          
      </div>
      </section>
      </>
  )
}
export default CustomerReviews;