import CTA from "./CTA"


const PagesHeader = ({image, text, text2}) => {

  const backgroundImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  }

  return (
    <div className="relative">
      <div className="page-header sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-20 px-10" style={backgroundImage}>
        <h1 className='text-white md:text-7xl text-4xl text-center uppercase font-bold'>{text}</h1>
        <h2 className='text-white md:text-xl max-w-7xl text-lg text-center'>{text2}</h2>
        <CTA link='/contact' text='Start Now' className="hover:text-gray-900" />
      </div>
    </div>
  )
}

export default PagesHeader