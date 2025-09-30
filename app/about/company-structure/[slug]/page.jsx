import Bio from '@/components/Bio'
import PagesHeader from '@/components/PagesHeader'
import dummy from '@/public/customer-support.jpg'
import { bio } from '@/data';

export async function generateStaticParams() {
  return bio.map((person) => ({
    slug: person.slug,
  }));
}



const page = async ({params}) => {

  const { slug } = await params;
  const singleBio = bio.find((s) => s.slug === slug);

  if(!singleBio) {
    return <div className="text-9xl text-black text-center">404 Not found</div>
  }

  return (
    <>
      <PagesHeader image='/customer-support.jpg' text='Bio' />
      <Bio 
        name={singleBio.name} 
        office={singleBio.office} 
        role={singleBio.position} 
        img={singleBio.img} 
        text={singleBio.description}
      />
    </>
  )
}

export default page

// {slogan.split('\n').map((line, index) => (
//           <p key={index} className="text-xl text-gray-800">
//             {line}
//             {index < slogan.split('\n').length - 1 && <br />}
//           </p>
//         ))}