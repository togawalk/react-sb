import { Badge } from './components/Badge'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Button } from './components/Button'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className='flex items-start flex-1 gap-4 px-8 py-3'>
        <Breadcrumbs
          classes={{
            ol: 'px-8 py-4 bg-card rounded-md',
          }}
        >
          <li className='inline-flex items-center'>
            <a
              className='flex items-center text-sm text-muted-foreground hover:underline hover:text-accent-foreground focus:outline-none focus:text-accent-foreground'
              href='#'
            >
              Home
            </a>
          </li>
          <li className='inline-flex items-center'>
            <a
              className='flex items-center text-sm text-muted-foreground hover:underline hover:text-accent-foreground focus:outline-none focus:text-accent-foreground'
              href='#'
            >
              App Center
            </a>
          </li>
          <li
            className='inline-flex items-center text-sm font-semibold text-primary truncate'
            aria-current='page'
          >
            Application
          </li>
        </Breadcrumbs>
        <div className='bg-card rounded-md p-4 flex gap-3'>
          <Badge>Badge</Badge>
          <Badge variant='destructive'>Badge</Badge>
        </div>
        <div className='bg-card rounded-md p-4 flex gap-3 flex-col items-start'>
          <Button>Button</Button>
          <Button variant='destructive'>Destructive button</Button>
          <Button variant='outline'>Outline button</Button>
          <Button variant='secondary'>Secondary button</Button>
          <Button variant='ghost'>Ghost button</Button>
          <Button variant='link'>Link button</Button>
        </div>
      </main>
    </>
  )
}

export default App
