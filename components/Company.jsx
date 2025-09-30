'use client'
import mark from '@/public/bios/mark-hakim.png'
import jon from '@/public/bios/jonathan-oswald.png'
import teperson from '@/public/bios/teperson.png'
import delmo from '@/public/bios/paula-delmo.png'
import torres from '@/public/bios/jamie-torres.png'
import cruz from '@/public/bios/cathy-cruz.png'
import toni from '@/public/bios/toni-yap.png'
import janice from '@/public/bios/janice-jugarap.png'
import alieza from '@/public/bios/alieza-alvaira.png'
import joey from '@/public/bios/joey-kate.png'
import ellen from '@/public/bios/ellen-newsome.png'
import ruhi from '@/public/bios/ruhi.png'
import christine from '@/public/bios/christine-chemosit.png'
import dan from '@/public/bios/dan-jobs.png'
import tayler from '@/public/bios/george-tayler.png'
import chris from '@/public/bios/chris-motari.png'
import rose from '@/public/bios/rose-white.png'
import elia from '@/public/bios/elia-lakkis.png'
import Image from 'next/image'
import Link from 'next/link'

const Company = () => {

  const employees = [
    { 
      state: 'California', country: 'USA', people: 
      [
        { name: 'Mark Hakim', role: 'CEO', img: mark, link: '/about/company-structure/mark-hakim' },
        { name: 'Jonathan Oswald', role: 'President', img: jon, link: '/about/company-structure/jonathan-oswald' },
        { name: 'Jonathan Teperson', role: 'In-House Councel Chief Compliance Office', img: teperson, link: '/about/company-structure/jonathan-teperson' },
      ], 
    },
    { 
      state: 'Davao', country: 'Philippines', people: 
      [
        { name: 'Ruhi Suttarwala', role: 'Director', img: ruhi, link: '/about/company-structure/ruhi-suttarwala' },
        { name: 'Christine Chemosit', role: 'Vice President', img: christine, link: '/about/company-structure/christine-chemosit' },
        { name: 'Dan Jobs', role: 'Operations Manager', img: dan, link: '/about/company-structure/dan-jobs' },
        { name: 'George Tayler', role: 'Quality Assurance Manager', img: tayler, link: '/about/company-structure/george-tayler' },
        { name: 'Chris Motari', role: 'IT Manager', img: chris, link: '/about/company-structure/chris-motari' },
        { name: 'Rose White', role: 'Sales and Marketing Team Leader', img: rose, link: '/about/company-structure/rose-white' },
      ]
     },
    {
      state: 'Nairobi', country: 'Kenya', people: 
      [
        { name: 'Paula Delmo', role: 'Vice President', img: delmo, link: '/about/company-structure/paula-delmo' },
        { name: 'Jamie Torres', role: 'Sales Manager', img: torres, link: '/about/company-structure/jamie-torres' },
        { name: 'Cathy Cruz', role: 'Client Services Supervisor', img: cruz, link: '/about/company-structure/cathy-cruz' },
        { name: 'Toni Yap', role: 'Administration Manager', img: toni, link: '/about/company-structure/toni-yap' },
        { name: 'Janice Jugarap', role: 'Team Leader', img: janice, link: '/about/company-structure/janice-jugarap' },
        { name: 'Alieza Alvaira', role: 'HR Manager', img: alieza, link: '/about/company-structure/alieza-alvaira' },
        { name: 'Joey Kate', role: 'HR Assistant', img: joey, link: '/about/company-structure/joey-kate' },
        { name: 'Ellen Newsome', role: 'Sales Team Leader', img: ellen, link: '/about/company-structure/ellen-newsome' },
      ]
    },
    { 
      state: 'Beirut Office', country: 'Lebanon', people: 
        [
          { name: 'Elia Lakkis', role: 'Branch Manager', img: elia, link: '/about/company-structure/elia-lakkis' },
        ] 
    }
  ]

  return (
    <div>
      {employees.map((office, index) => (
        <div key={index}>
          <h1 className='text-center md:text-6xl text-4xl font-bold text-[#0E1F77] my-10'>{office.state}</h1>
          <h2 className='text-center md:text-4xl text-xl font-bold text-[#0E1F77] mt-6'>{office.country}</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-x-10 gap-y-20 mt-10'>
            {office.people.map((person, idx) => (
              <Link href={person.link} key={idx} className='relative w-80 h-[450px] rounded-lg overflow-hidden shadow-lg shadow-black/50 group'>
                <Image src={person.img} alt={person.name} fill className='absolute -z-10 group-hover:scale-105 transition duration-300 ease' />
                <div className='absolute bottom-0 w-full h-40 bg-[#0E1F77]/30 backdrop-blur-sm p-5 flex flex-col'>
                  <h1 className='text-myYellow text-3xl font-bold'>{person.name}</h1>
                  <h2 className='text-white text-xl font-semibold'>{person.role}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Company