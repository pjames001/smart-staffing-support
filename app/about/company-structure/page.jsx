import PagesHeader from '@/components/PagesHeader'
import Company from '@/components/Company'

const page = () => {

  

  return (
    <>
      <PagesHeader image='/accounting.jpg' text='Company Structure' />
      <main className='max-w-7xl mx-auto px-5 py-20'>
        <Company />
      </main>
    </>
  )
}

export default page