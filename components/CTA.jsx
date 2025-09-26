import Link from 'next/link'
import React from 'react'

const CTA = ({link, text, className=''}) => {
  return (
    <Link href={link} className={`${className} relative py-2 px-6 font-bold text-xl text-myYellow bg-transparent border border-myYellow rounded-md cursour-pointer overflow-hidden transition-all duration-300 ease liquid`}>
      {text}
    </Link>
  )
}

export default CTA