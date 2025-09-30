'use client'
import Image from 'next/image'

const Bio = ({name, office, role, text, img, email, className=''}) => {
  return (
    <div className={`${className} flex xl:flex-row flex-col justify-between px-10 my-10`}>
      <Image src={img} alt={name} width={400} className='xl:mx-0 mx-auto mb-10 rounded-lg' />

      <div className="xl:block hidden h-[600px] w-[2px] bg-gradient-to-b from transparent via-[#0E1F77] to-transparent relative"></div>
      <div className='xl:max-w-[55%] max-w-full flex flex-col'>
        <h1 className='xl:text-left text-center text-4xl text-[#0E1F77] font-bold'>{name}</h1>
        <h2 className='xl:text-left text-center text-2xl text-gray-700 font-semibold my-2'>{role}</h2>
        <h3 className='xl:text-left text-center text-xl text-gray-600 font-medium mb-5'>{office} Office</h3>
        {text.split('\n').map((line, index) => (
          <p key={index} className="text-gray-700 text-justify whitespace-pre-line0">
            {line}
            {index < text.split('\n').length - 1 && <br />}
          </p>
        ))}
        {email && <a href={`mailto:${email}`} className='text-myYellow font-semibold mt-5'>{email}</a>}
      </div>
    </div>
  )
}

export default Bio