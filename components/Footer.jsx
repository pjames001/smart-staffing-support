'use client'
import Image from "next/image"
import logo from '@/public/logo2.png'
import { services, industries } from "@/data"
import Link from "next/link"


const Footer = () => {

  const company = [
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Services',
      link: '/services'
    },
    {
      title: 'Industries',
      link: '/indistries'
    },
    {
      title: 'How We Work',
      link: '/how-we-work'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]

  const about = [
    {
      title: 'Company Structure',
      link: '/company-structure'
    },
    {
      title: 'Location',
      link: '/location'
    },
    {
      title: 'Media',
      link: '/media'
    },
  ]

  return (
    <footer className="w-full min-h-[50vh] bg-neutral-800 pt-10 text-white">
      <div className="flex xl:flex-row flex-col justify-center xl:items-start items-center gap-20 xl:text-left text-center mb-6">
        <div>
          <Image src={logo} alt="logo" width={250} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="flex flex-col">
            {services.map(service => (
              <li key={service.id} className="text-sm mb-2">
                <Link href={`/services${service.link}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Industries</h2>
          <ul className="flex flex-col">
            {industries.map(item => (
              <li key={item.id} className="text-sm mb-2">
                <Link href={`/industries${item.link}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Company</h2>
          <ul className="flex flex-col">
            {company.map((item, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <ul className="flex flex-col">
            {about.map((item, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center py-10 text-sm">
        &copy;{new Date().getFullYear()} Smart Staffing Support, All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer