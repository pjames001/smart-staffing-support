import HomeIndustries from '@/components/HomeIndustry'
import PagesHeader from '@/components/PagesHeader'

const page = () => {
  return (
    <>
      <PagesHeader image='/industries.jpg' text='Your Industry' text2='Is our speciality' />
      <HomeIndustries />
    </>
  )
}

export default page