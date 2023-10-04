import React from 'react';
import navLink from '../Constant';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
const Nav=()=>{
    return(
        <>
        <header className=' padding-x py-8 w-full absolute z-10'>
            <nav className=' flex justify-center items-center max-container  '>
                <a href = "/">
                    <img src = {headerLogo}
                    alt='header'
                    height={29}
                    width={130}
                    
                    />
                </a>
                <ul className=' max-lg:hidden flex-1 flex justify-center items-center gap-16  '>
                {navLink.map((val)=>(
                    
                    <li key={val.label} >
                        <a href={val.href}
                        className=" font-monts text-slate-500
                        leading-normal  text-lg
                        "
                        
                        
                        >{val.label}</a>

                    </li>
                    
                ))}
                </ul>
                <div className='lg:hidden flex ml-auto '>
                    <img src = {hamburger} alt = "Hamburger" width={25} height={25}/>
                </div>
               
                
            </nav>
        </header>
        </>
    )
}
export default Nav;