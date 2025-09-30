import CTA from "@/components/CTA";
import { servicesPages } from "@/data"
import Image from "next/image"
import img1 from '@/public/compliance/1.png'
import img2 from '@/public/compliance/2.png'
import img3 from '@/public/compliance/3.png'
import img4 from '@/public/compliance/4.png'
import img5 from '@/public/compliance/5.png'
import img6 from '@/public/compliance/6.png'
import img8 from '@/public/compliance/8.png'
import img9 from '@/public/compliance/9.png'
import img10 from '@/public/compliance/10.png'


export async function generateStaticParams() {
  return servicesPages.map((service) => ({
    slug: service.slug,
  }));
}

const page = async ({params}) => {

  const { slug } = await params;
  const service = servicesPages.find((s) => s.slug === slug);

  if(!service) {
    return <div className="text-9xl text-black text-center">404 Not found</div>
  }

  return (
    <main>
      <video className='top-0 left-0 -z-10 w-full h-screen md:object-cover object-contain' controls autoPlay={true} muted loop playsInline>
        <source src={service.video} type='video/mp4' />
        your browser does not support this video extension
      </video>
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 my-20 px-6 lg:px-10">
        {/* Text Content */}
        <div className="flex-1 space-y-8 md:space-y-12">
          <h1 className="text-[#0E1F77] font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            {service.slogan}
          </p>
          <CTA link="/contact" text="REACH OUT NOW!" className="hover:text-white" />
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative w-full h-auto">
            <Image
              src={service.image1}
              alt={service.title}
              width={600}
              height={400} // Added a height for better layout control
              className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen relative">
        <Image src={service.image2} alt={service.title2} fill className="object-cover brightness-50 absolute -z-10" />
        <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center gap-20 px-10">
          <h1 className="text-myYellow font-bold md:text-7xl text-4xl text-center text-shadow-lg/50 ">Smart Staffing Support</h1>
          <p className="md:text-3xl text-xl text-white text-justify bg-black/30 backdrop-blur-sm rounded-lg p-8">{service.slogan2}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-10 flex md:flex-row flex-col justify-between items-center gap-20 px-10">
        <div>
          <h1 className="text-[#0E1F77] md:text-4xl text-2xl font-extrabold leading-tight">{service.title2}</h1>
          <p className="md:text-xl text-md text-gray-700 my-10">{service.slogan3}</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <Image src={img1} alt="logo 1" width={1000} />
          <Image src={img2} alt="logo 2" width={1000} />
          <Image src={img3} alt="logo 3" width={1000} />
          <Image src={img4} alt="logo 4" width={1000} />
          <Image src={img5} alt="logo 5" width={1000} />
          <Image src={img6} alt="logo 6" width={1000} />
          <Image src={img8} alt="logo 8" width={1000} />
          <Image src={img9} alt="logo 9" width={1000} />
          <Image src={img10} alt="logo 10" width={1000} />
        </div>
      </section>
    </main>
  )
}

export default page

