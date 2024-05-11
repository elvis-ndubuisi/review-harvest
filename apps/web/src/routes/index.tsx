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
      <section>
        <h1 className='font-bold text-4xl'>Did you hear what your user have to say?</h1>
        <p className='text-lg text-semibold'>
          Effortlessly capture reviews across channels. Gain insights that drive growth.
        </p>
        <Button>How shall I?</Button>
      </section>
      <Feature />
      <Testimonies />
      <Cta />
      <Faqs />
      <Footer />
    </>
  )
}
