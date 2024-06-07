import React from 'react';
import {Link} from 'react-scroll';
import { BiSolidCoffeeBean } from "react-icons/bi";
import Button from '../layouts/Button.jsx'
function NavBar() {
return(
    <>
        <div className="fixed w-full">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer text-5xl">
                        <span>
                        <BiSolidCoffeeBean />
                        </span>
                        <h1>Brewtopia</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
                        <Link to="home" spy={true} smoth={true} duration={500} className=' hover:text-amber-600 transition-all cursor-pointer'>Home</Link>
                        <Link to="Menu" spy={true} smoth={true} duration={500} className='hover:text-amber-600 transition-all cursor-pointer'>Menu</Link>
                        <Link to="about" spy={true} smoth={true} duration={500} className='hover:text-amber-600 transition-all cursor-pointer'>About</Link>
                        <Link to="review" spy={true} smoth={true} duration={500} className='hover:text-amber-600 transition-all cursor-pointer'>Reviews</Link>
                        <Button title ="Login"/>
                    </nav>
                </div>
            </div>
        </div>
    </>
)
}
export default NavBar;