
const ServiceBox = (props)=>{
    return (
        <>
            <div className=" rounded-xl border mt-20 shadow-md hover:shadow-xl h-40  ">
                <div className=" flex justify-start mt-5 ml-5 rounded-full
                items-center ">
               <img src ={props.img} alt="ServiceImg"
               className="text-red-600 bg-red-600 rounded-full px-1 py-1 "
               />
                </div>
                <div className="">
                    <p className="ml-5 text-xl font-bold">{props.label}</p>
                </div>
               <div className="ml-5 text-slate-600  ">
                <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}
export default ServiceBox;