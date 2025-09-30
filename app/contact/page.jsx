import Form from '@/components/Form'
import PagesHeader from '@/components/PagesHeader'
import Image from 'next/image'
import contact from '@/public/contact2.jpg'

const page = () => {
  return (
    <>
      <PagesHeader image='/contact.jpg' text='Contact Us' />
      <main>
        <div>
          <Image src={contact} alt='contact' width={950} />
        </div>
        <Form />
      </main>
    </>
  )
}

export default page