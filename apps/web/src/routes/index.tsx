import {Button} from '@/components/ui/button'
import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => (
        <div className=''>
            <h2 className='text-3xl'>Hello Index</h2>
            <Button>click me</Button>
        </div>
    ),
})
