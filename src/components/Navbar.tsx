import React from 'react'
import { Link } from 'react-router-dom'

interface NavbarItem {
  name: string,
  path: string
}

const Navbar: React.FC = () => {
  const navbarItems: NavbarItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Create', path: '/create' },
    { name: 'Features', path: '/features' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' }
  ]

  return (
    <nav className=' absolute top-0 left-0n w-full bg-transparent text-black p-4 z-20'>
      <div className='flex justify-between items-center'>
      
        <div className='flex items-center space-x-1'>
          <p className='text-xl text-black rounded-full bg-amber-100 w-8 h-8 flex items-center justify-center'>
            A
          </p>
          <p className='text-lg font-bold'>Artify.</p>
          <p className='text-lg font-bold'>AI</p>
        </div>

       
        <ul className='flex space-x-7 text-lg'>
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className='text-black hover:text-blue-100 transition-colors duration-300'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

       
        <button className='bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-600 transition-all duration-300'>
          Create
        </button>
      </div>
    </nav>
  )
}

export default Navbar
