import {Button} from '@/components/ui/button'
import {Cta} from '@/components/widgets/cta'
import {Faqs} from '@/components/widgets/faqs'
import {Feature} from '@/components/widgets/feature'
import {Footer} from '@/components/widgets/footer'
import {Navigation} from '@/components/widgets/navigation'
import {Testimonies} from '@/components/widgets/testimonies'
import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Page,
})

function Page() {
  return (
    <>
      <Navigation />
      <section className='mb-10'>
        <h1 className='font-black text-5xl text-center max-w-2xl mx-auto mt-20'>
          Did you hear what your user have to say?
        </h1>
        <p className='text-lg text-semibold text-center mx-auto max-w-xl my-6'>
          Effortlessly capture reviews across channels. Gain insights that drive growth.
        </p>
        <div className='flex items-center gap-4 justify-center'>
          <Button size={'lg'}>How shall I?</Button>
          <Button size={'lg'} variant={'outline'}>
            something
          </Button>
        </div>
      </section>
      <Feature />
      <Testimonies />
      <Cta />
      <Faqs />
      <Footer />
    </>
  )
}
