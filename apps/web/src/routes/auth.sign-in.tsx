import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/auth/sign-in')({
  component: Page,
})

function Page() {
  return (
    <main>
      <h3>Log in</h3>
      sing in
    </main>
  )
}
