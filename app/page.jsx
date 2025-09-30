import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import rec1 from '@/public/rec1.jpg'
import rec2 from '@/public/rec2.jpg'
import rec3 from '@/public/rec3.jpg'
import { ClockFading, ImageUpscale, PiggyBank, Send, ShieldCheck, Star } from 'lucide-react'
import HomeServices from "@/components/HomeServices";
import HomeIndustry from "@/components/HomeIndustry"
import Carousel from '@/components/Carousel'
import LogoLoop from "@/components/LogoLoop";
import secure from '@/public/secure.jpg'
import scalable from '@/public/scalable.jpg'
import assurance from '@/public/assurance.jpg'
import support from '@/public/support.jpg'
import trial from '@/public/free-trial.jpg'


export default function Home() {

  const techLogos = [
    { node: <ClockFading />, title: "React", href: "https://react.dev" },
    { node: <ImageUpscale />, title: "Next.js", href: "https://nextjs.org" },
    { node: <PiggyBank />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <Send />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  // Alternative with image sources
  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];

  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <section className="max-w-7xl my-36 mx-auto flex md:flex-row flex-col justify-center items-center gap-10">
          <Link href='/contact' className="relative w-[400px] h-[378px] rounded-lg hover:scale-105 transition duration-300 ease">
            <div className="absolute top-0 left-0 z-20 rounded-3xl w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
            <Image src={rec1} alt="reduce risks" fill />
            <div className="absolute top-0 left-0 z-30 w-full h-full flex flex-col justify-between gap-4 p-6 text-white text-center">
              <h2 className="text-3xl font-semibold">Reduce Risks</h2>
              <p className="font-medium">Provide easy outsourcing solutions with highest quality, cost-effective back office support services</p>
              <button className="flex self-center items-center gap-2 text-lg bg-myYellow px-6 py-2 rounded-lg text-gray-900 font-medium cursor-pointer">
                <Send /> Learn More
              </button>
            </div>
          </Link>

          <Link href='/contact' className="relative w-[400px] h-[378px] rounded-lg hover:scale-105 transition duration-300 ease">
            <div className="absolute top-0 left-0 z-20 rounded-3xl w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
            <Image src={rec2} alt="reduce risks" fill />
            <div className="absolute top-0 left-0 z-30 w-full h-full flex flex-col justify-between gap-4 p-6 text-white text-center">
              <h2 className="text-3xl font-semibold">Cost Effective</h2>
              <p className="font-medium">By streamlining operations and reducing costs, we uphold transparency, compliance, and client satisfaction as a top BPO worldwide</p>
              <button className="flex self-center items-center gap-2 text-lg bg-myYellow px-6 py-2 rounded-lg text-gray-900 font-medium cursor-pointer">
                <Send /> Learn More
              </button>
            </div>
          </Link>

          <Link href='/contact' className="relative w-[400px] h-[378px] rounded-lg hover:scale-105 transition duration-300 ease">
            <div className="absolute top-0 left-0 z-20 rounded-3xl w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
            <Image src={rec3} alt="reduce risks" fill />
            <div className="absolute top-0 left-0 z-30 w-full h-full flex flex-col justify-between gap-4 p-6 text-white text-center">
              <h2 className="text-3xl font-semibold">Increase Revenue</h2>
              <p className="font-medium">Focus on Your Core Business Activities. Outsourcing is the future!</p>
              <button className="flex self-center items-center gap-2 text-lg bg-myYellow px-6 py-2 rounded-lg text-gray-900 font-medium cursor-pointer">
                <Send /> Learn More
              </button>
            </div>
          </Link>
        </section>

        <section className="relative bg-gradient-to-br from-myYellow/80 to-transparent to-20%">
          <div className="absolute inset-0 bg-gradient-to-bl from-myYellow/80 to-transparent to-20%"></div>
          <h1 className="text-center text-5xl text-gray-800 font-semibold py-10">We Understand Your Business</h1>
          <HomeServices />
        </section>

        <section>
          <h1 className="text-center text-5xl text-gray-800 font-semibold py-10">Industries We Serve</h1>
          <HomeIndustry />
        </section>

        <section className="max-w-[1440px] my-36 mx-auto px-6">
          <h1 className="text-center text-5xl text-gray-800 font-semibold py-10">Why Us?</h1>
          <div className="w-full flex lg:flex-row flex-col justify-center items-center flex-wrap gap-6">
            <div className="rounded-lg w-[400px] border border-gray-300 p-10 shadow-md hover:shadow-black transition duration-300 ease">
              <Image src={secure} alt='Secure and Compliance' className="rounded-lg mb-6" />
              <ShieldCheck className="text-myYellow" size={50} />
              <h2 className="text-2xl text-gray-800 my-6">Secure and Complient</h2>
              <p className="text-gray-800">Enterprise-grade security with full compliance to international standards.</p>
            </div>

            <div className="rounded-lg w-[400px] border border-gray-300 p-10 shadow-md hover:shadow-black transition duration-300 ease">
              <Image src={scalable} alt='Scalable Solutions' className="rounded-lg mb-6" />
              <ImageUpscale className="text-myYellow" size={50} />
              <h2 className="text-2xl text-gray-800 my-6">Scalable Solutions</h2>
              <p className="text-gray-800">Flexible services that adapt and scale with your growing needs.</p>
            </div>

            <div className="rounded-lg w-[400px] border border-gray-300 p-10 shadow-md hover:shadow-black transition duration-300 ease">
              <Image src={assurance} alt='Quality Assured' className="rounded-lg mb-6" />
              <Star className="text-myYellow" size={50} />
              <h2 className="text-2xl text-gray-800 my-6">Quality Assured</h2>
              <p className="text-gray-800">Rigorous quality control processes ensuring exceptional results.</p>
            </div>
            
            <div className="rounded-lg w-[400px] border border-gray-300 p-10 shadow-md hover:shadow-black transition duration-300 ease">
              <Image src={support} alt='24/7 Support' className="rounded-lg mb-6" />
              <ClockFading className="text-myYellow" size={50} />
              <h2 className="text-2xl text-gray-800 my-6">24/7 Support</h2>
              <p className="text-gray-800">Round-the-clock support ensuring your business never stops.</p>
            </div>

            <div className="rounded-lg w-[400px] border border-gray-300 p-10 shadow-md hover:shadow-black transition duration-300 ease">
              <Image src={trial} alt='Free Trial' className="rounded-lg mb-6" />
              <PiggyBank className="text-myYellow" size={50} />
              <h2 className="text-2xl text-gray-800 my-6">Free Trial</h2>
              <p className="text-gray-800">Round-the-clock support ensuring your business never stops.</p>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-br from-myYellow/80 to-transparent to-30%">
          <div className="absolute inset-0 bg-gradient-to-bl from-myYellow/80 to-transparent to-30%"></div>
          <div className="flex justify-center items-center max-w-7xl mx-auto my-36 px-6">
            <Carousel
              baseWidth={600}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={true}
            />
          </div>
        </section>

        
      </main>
    </>
  );
}
