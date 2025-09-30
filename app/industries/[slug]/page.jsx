import { industriesPages } from "@/data"
import PagesHeader from "@/components/PagesHeader";
import Industries from "@/components/Industries";
import img1 from '@/public/carousel/1.png'
import img2 from '@/public/carousel/2.jpeg'
import img3 from '@/public/carousel/3.png'
import LogoLoop from "@/components/LogoLoop";

export async function generateStaticParams() {
  return industriesPages.map((industry) => ({
    slug: industry.slug,
  }));
}

const page = async ({params}) => {

  const { slug } = await params;

  const industry = industriesPages.find((i) => i.slug === slug);
  
  if(!industry) {
    return <div className="text-9xl text-black text-center">404 Not found</div>
  }

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
    <main>
      <PagesHeader image={industry.image1} text={industry.title1} text2={industry.slogan1} />
      <section className="max-w-7xl mx-auto my-20 flex flex-col gap-32 px-10">
        <Industries title={industry.title2} slogan={industry.slogan2} image={industry.image2} />
        <div className="mx-auto  w-4/5 relative">
          <div className="shadow h-[5px] overflow-hidden"></div>
        </div>
        <Industries title={industry.title3} slogan={industry.slogan3} image={industry.image3} className="lg:flex-row-reverse flex-col-reverse" />
        <div className="mx-auto  w-4/5 relative">
          <div className="shadow h-[5px] overflow-hidden"></div>
        </div>
        <Industries title={industry.title4} slogan={industry.slogan4} image={industry.image4} />
      </section>

      <section>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
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
    </main>
  )
}

export default page