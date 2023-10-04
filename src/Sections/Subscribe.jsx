const Subscribe=()=>{
  return(
      <>
        <section className=" max-container
        flex justify-between items-center  max-lg:flex-col gap-10">
          <h3 className="text-4xl font-bold ">Sign up from <span className="text-red-500 ">
              Updates
            </span> & Newsletter

          </h3>
          <div className="flex flex-col mt-12 flex-1 ml-44">
            
            <input type="text" placeholder="subscribe" 
            className="  border-2 rounded-lg px-2 py-1 w-56 focus:border-4 hover:border-red-400 " />
            <button className="mt-8 bg-red-500 rounded-full first-letter:
            text-white py-2 px-2 w-24 ml-16
            ">Sign up</button>
            </div>
        </section>
      </>
  )
}
export default Subscribe;