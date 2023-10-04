import React from 'react';
import Nav from './Components/Nav';
import {
    CustomerReviews,
    Hero, PopularProducts,
    Services,
    SpecialOffer,
    Subscribe, Superquality
} from './Sections/index';

const App=()=>{
    return(
        <>
        <main className="relative">
       <Nav/>
        <section className="xl:padding-1 wide:padding-r padding-b ">
            <Hero/>
        </section>
        <section className='padding '>
        <PopularProducts/>
        </section>
        <section className='  '>
       <Superquality/>
        </section>
        <section className='padding-x py-10'>
        <Services/>
        </section>
        <section className='padding'>
        <SpecialOffer/>
        </section>
        <section className=" bg-blue-50 padding">
        <CustomerReviews/>
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
        </section>
        <section className='bg-black padding-x padding-t pb-8'>
        <footer/>
        </section>
        
        </main>
        </>
    )
}
export default App;