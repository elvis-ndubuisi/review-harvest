import {Separator} from '../ui/separator'

import {Link} from '@tanstack/react-router'

export function Footer() {
  return (
    <footer>
      <section className='max-w-screen-xl mx-auto py-8'>
        <div>
          <h3>ReviewHarvest</h3>
          <div>socials</div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Features</Link>
            </li>
            <li>
              <Link to='/'>How it works</Link>
            </li>
            <li>
              <Link to='/'>FAQs</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Legal Links</h4>
          <ul>
            <li>
              <Link to='/'>Terms of service</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/'>Support</Link>
            </li>
            <li>
              <Link to='/'>Help Center</Link>
            </li>
            <li>
              <Link to='/'>Security</Link>
            </li>
          </ul>
        </div>
      </section>
      <Separator />
      <section className='flex items-center justify-between max-w-screen-xl mx-auto my-4'>
        <div className='flex items-center gap-4'>
          <small>&copy; 2024 Review Harvest. All rights reserved</small>
          <Link to='/' className='text-sm'>
            Privacy Policy
          </Link>
          <Link to='/' className='text-sm'>
            Terms of Service
          </Link>
        </div>
        <div className='flex items-center gap-4'>socials</div>
      </section>
    </footer>
  )
}
