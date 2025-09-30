import HomeServices from '@/components/HomeServices'
import PagesHeader from '@/components/PagesHeader'

const page = () => {
  return (
    <>
      <PagesHeader image='/services.jpg' text='Services' text2='Adapted to fit your business' />
      <section className='w-full min-h-screen'>
        <HomeServices />
      </section>
    </>
  )
}

export default page