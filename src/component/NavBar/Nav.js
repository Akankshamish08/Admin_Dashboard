import React from 'react'
import { FaBars, FaSearch ,FaBell, FaUserCircle} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between '>
      <div className='flex items-center text-xl'>
        
       
       
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
          {/* <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-white'><FaSearch/></button>
            <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:black'></input>
          </span> */}
        </div>
        <div className='text-white'><FaBell className='w-6 h-6'/>
          
        </div>
        <div className='relative'>
          <button className='text-white group '>
            <FaUserCircle  className='w-6 h-6 mt-1'/>
             <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white'>
              <ul className='py-2 text-sm text-gray-950'>
                <li>
                  <a href='#'>Profile</a>
                </li>
                <li>
                  <a href='#'>Setting</a>
                </li>
                <li>
                  <a href='#'>Logout</a>
                </li>
              </ul>
             </div>
          </button>
        </div>

      </div>

    </nav>
  )}

  
export default Nav