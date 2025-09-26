'use client'
import Image from 'next/image.js'
import { services } from '../data.js'
import Link from 'next/link.js'

const HomeServices = () => {
  
  return (
    <div className='max-w-7xl my-24 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center gap-4'>
      {services.map(service => (
        <Link key={service.id} href={`/services${service.link}`} className='relative w-[400px] h-[280px] rounded-xl overflow-hidden hover:scale-102 transition duration-300 ease'>
          <div className='absolute top-0 left-0 w-full h-full z-10 bg-black/60'></div>
          <Image src={service.image} alt={service.title} fill className='object-cover' />
          <h3 className='absolute top-1/2 left-1/2 z-50 -translate-1/2 text-white text-2xl w-full text-center font-medium'>{service.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default HomeServices