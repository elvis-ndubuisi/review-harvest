// import {Badge} from '@/components/ui/badge'
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
      <section className='mb-10 grid place-content-center'>
        <div className='space-y-6 mt-20 mb-10'>
          {/* <Badge
            variant='outline'
            className='text-orange-500 bg-orange-100 border border-orange-500 rounded-full'>
            Collect and Leverage customer reviews
          </Badge> */}

          <h1 className='font-bold text-6xl text-center max-w-2xl mx-auto'>
            Did you hear what <br /> your user have to say?
          </h1>
          <p className='text-lg font-medium opacity-80 text-center mx-auto max-w-2xl'>
            Effortlessly capture reviews across channels - websites, apps, and social media.
            Gain deep insights from centralized customer feedback data.
          </p>
          <div className='flex items-center gap-4 justify-center'>
            <Button size={'lg'}>How shall I?</Button>
          </div>
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
