'use client'
import { industries } from "@/data";
import Image from "next/image";
import CTA from "./CTA";
import Link from "next/link";

const HomeIndustries = () => {
  return (
    <div className="min-h-screen grid 2xl:grid-cols-2 grid-cols-1 place-items-center m-0 p-0 font-martel-sans">
      {industries.map(industry => (
        <div
          key={industry.id}
          className="group relative flex flex-nowrap justify-between w-[85vmin] h-[65vmin] my-8 mx-auto rounded-4xl border-8 border-transparent transition-all duration-300 ease-in-out overflow-hidden"
          
        >
          <div className="overlay relative flex w-full h-full bg-gray-800 p-4 md:p-3 shadow-lg shadow-black transition-all duration-400 ease-in-out z-10 group-hover:-translate-x-[50vmin]">
            <div
              className="overlay-content relative flex flex-col justify-between w-[15vmin] h-full py-2 pl-2 md:pl-1 border-4 border-transparent transition-all duration-300 ease-in-out delay-200 z-10 group-hover:border-0 group-hover:translate-x-[50vmin]"
              style={{
                borderImage:
                  "linear-gradient(to bottom, #F5D41B, #F5D41B) 0 0 0 100%",
              }}
            >
              <h3 className="animate slide-left pop delay-4 text-[3.25vmin] text-left text-white">
                {industry.title}
              </h3>
            </div>
            <div className="absolute top-0 right-0 w-[50vmin] h-full transition-all duration-300 ease-in-out animate slide delay-5 group-hover:w-[40vmin] group-hover:brightness-50">
              <Image src={industry.image} alt={industry.title} fill className="object-cover" />
            </div>
          </div>
          <div className="text absolute top-0 right-0 w-[50vmin] h-full p-12 md:p-6 bg-myYellow">
            <p className="text-[max(10pt,2.5vmin)] leading-relaxed text-gray-800 mb-10">
              {industry.content}
            </p>
            {/* <CTA link={`/industries/${industry.link}`} text='Learn More' /> */}
            <Link href={`/industries/${industry.link}`} className="py-2 px-6 bg-gray-600 text-white text-lg rounded-md">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeIndustries;
