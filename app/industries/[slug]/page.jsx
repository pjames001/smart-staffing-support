import { industriesPages } from "@/data"
import PagesHeader from "@/components/PagesHeader";
import Image from "next/image";
import Industries from "@/components/Industries";

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

  return (
    <main>
      <PagesHeader image={industry.image1} text={industry.title1} text2={industry.slogan1} />
      <section className="max-w-7xl mx-auto my-20 flex flex-col gap-32 px-10">
        <Industries title={industry.title2} slogan={industry.slogan2} image={industry.image2} />
        <div className="mx-auto  w-4/5 relative">
          <div class="shadow h-[5px] overflow-hidden"></div>
        </div>
        <Industries title={industry.title3} slogan={industry.slogan3} image={industry.image3} className="lg:flex-row-reverse flex-col-reverse" />
        <div className="mx-auto  w-4/5 relative">
          <div class="shadow h-[5px] overflow-hidden"></div>
        </div>
        <Industries title={industry.title4} slogan={industry.slogan4} image={industry.image4} />
      </section>
    </main>
  )
}

export default page