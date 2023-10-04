import ServiceBox from '../Components/ServiceBox';
import { services } from '../Constant/index';
const Services=()=>{
    return(
        <>
       <section>
        <div className="grid gap-5 lg:grid-cols-3
        md:grid-cols-3 sm:grid-cols-1
        grid-cols-1 " >
            {services.map((val)=>(
                <ServiceBox
                img     ={val.imgURL}
                label   = {val.label}
                text    = {val.subtext}
                />
                

                
            ))}
            

        </div>
       </section>
        </>
    )
  }
  export default Services;