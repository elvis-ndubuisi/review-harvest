import {Button} from '../ui/button'

import {Link} from '@tanstack/react-router'

const LINKS = [
  {title: 'Pricing', to: '/'},
  {title: 'How it works', to: '/'},
  {title: 'About Us', to: '/'},
  {title: 'About Us', to: '/'},
]

export function Navigation() {
  return (
    <header className='py-3 px-2'>
      <section className='flex items-center justify-between gap-6 max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-6'>
          <h3 className='font-bold text-lg'>ReviewHarvest</h3>
          <nav className='flex items-center gap-4'>
            {LINKS.map((link, idx) => (
              <Link to={link.to} key={link.title + idx}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant='ghost' asChild>
            <Link to='/auth/sign-in'>Log in</Link>
          </Button>

          <Button asChild>
            <Link to='/auth/sign-up'>Start for free</Link>
          </Button>
        </div>
      </section>
    </header>
  )
}
