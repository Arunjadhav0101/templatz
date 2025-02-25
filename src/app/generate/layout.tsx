import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function GenerateLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar></Navbar>
       <div className='py-[50px] print:py-0'>
       {children}
       </div>
    </div>
  )
}

export default GenerateLayout