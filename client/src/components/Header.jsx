import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
       <div className='container mx-auto flex items-center px-2 justify-between'>
               <div className='h-full'>
                                    <Link to={"/"} className='h-full flex justify-center items-center'>
                                        <img 
                                            src={logo}
                                            width={170}
                                            height={60}
                                            alt='logo'
                                            className='hidden lg:block'
                                        />
                                       
                                    </Link>

                                    
                </div>    
                 {/**Search */}
                 <div className='hidden lg:block'>
                                    <Search/>
                  </div>       

                  {/**login and my cart */}
                  <div className=''>
                            login and my cart       
                  </div>
       </div>
    </header>
  )
}

export default Header
