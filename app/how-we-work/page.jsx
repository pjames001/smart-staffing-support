import CTA from "@/components/CTA"
import PagesHeader from "@/components/PagesHeader"
import Steps from "@/components/Steps"
import Image from "next/image"
import howWeWork from '@/public/how-we-work.jpg'
import LogoLoop from "@/components/LogoLoop"

const page = () => {

    const imageLogos = [
      { src: "/carousel/1.png", alt: "logo 1" },
      { src: "/carousel/2.jpeg", alt: "logo 2" },
      { src: "/carousel/3.png", alt: "logo 3" },
      { src: "/carousel/4.webp", alt: "logo 4" },
      { src: "/carousel/5.png", alt: "logo 5" },
      { src: "/carousel/6.jpeg", alt: "logo 6" },
      { src: "/carousel/7.png", alt: "logo 7" },
      { src: "/carousel/8.png", alt: "logo 8" },
      { src: "/carousel/9.jpg", alt: "logo 9" },
      { src: "/carousel/10.png", alt: "logo 10" },
      { src: "/carousel/11.gif", alt: "logo 11" },
      { src: "/carousel/12.jpeg", alt: "logo 12" },
      { src: "/carousel/13.png", alt: "logo 13" },
      { src: "/carousel/14.png", alt: "logo 14" },
      { src: "/carousel/15.jpg", alt: "logo 15" },
      { src: "/carousel/16.png", alt: "logo 16" },
    ];

  return (
    <>
      <PagesHeader image='/process.jpg' text='Our Process' text2='That will push the wheels' />
        <section className="max-w-7xl mx-auto my-20 px-10">
          <div className="w-full flex lg:flex-row flex-col justify-between gap-10">
            <div className="lg:max-w-[50%] max-w-full">
              <h1 className="lg:text-5xl text-3xl text-[#0E1F77] font-bold mb-10">How We Work</h1>
                <p className="text-xl text-gray-800">
                  At Smart Staffing Support, our approach to working with clients is focused on creating personalized solutions. <br /> <br />As a top outsourcing company, we offer customized BPO services to businesses in the US, Africa, India, and the Philippines.
                </p>
              <div className="my-10">
                <CTA text='Contact Us' link='/contact' className="hover:text-white" />
              </div>
            </div>
            <Image
              src={howWeWork}
              alt='How We Work'
              width={500}
              className="rounded-xl object-cover"
            />
          </div>
        </section>
      <Steps />
      <section>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className="mt-10">
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
    </>
  )
}

export default page