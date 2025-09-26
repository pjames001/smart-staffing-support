'use client'

import Image from "next/image";
import CTA from "./CTA";

const Industries = ({title, slogan, image, className=''}) => {
  return (
    <div className={`${className} w-full flex lg:flex-row flex-col justify-between gap-10`}>
      <div className="lg:max-w-[50%] max-w-full">
        <h1 className="lg:text-5xl text-3xl text-[#0E1F77] font-bold mb-10">
          {title}
        </h1>
        {slogan.split('\n').map((line, index) => (
          <p key={index} className="text-xl text-gray-800">
            {line}
            {index < slogan.split('\n').length - 1 && <br />}
          </p>
        ))}
        <div className="my-10">
          <CTA text='Contact Us' link='/contact' className="hover:text-white" />
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        className="rounded-xl object-cover"
      />
    </div>
  );
};

export default Industries;
