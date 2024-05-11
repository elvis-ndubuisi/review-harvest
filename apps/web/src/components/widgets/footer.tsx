import {Link} from '@tanstack/react-router'

export function Footer() {
  return (
    <footer>
      <section>footer section</section>
      <hr />
      <section className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <small>&copy; 2024 Review Harvest. All rights reserved</small>
          <Link to='/'>Privacy Policy</Link>
          <Link to='/'>Terms of Service</Link>
          <Link to='/'>Cookie Settings</Link>
        </div>
        <div className='flex items-center gap-4'>socials</div>
      </section>
    </footer>
  )
}
