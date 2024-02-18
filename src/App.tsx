import { Badge } from '@components/ui/Badge'
import { Breadcrumbs } from '@components/ui/Breadcrumbs'
import { Button } from '@components/ui/Button'
import { Header } from '@components/Header'
import { Timeline } from './components/ui/Timeline'

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
          <Badge variant='warning'>Badge</Badge>
        </div>
        <div className='bg-card rounded-md p-4 flex gap-3 flex-col items-start'>
          <Button>Button</Button>
          <Button variant='destructive'>Destructive button</Button>
          <Button variant='outline'>Outline button</Button>
          <Button variant='secondary'>Secondary button</Button>
          <Button variant='ghost'>Ghost button</Button>
          <Button variant='link'>Link button</Button>
        </div>

        <div className="bg-card rounded-md p-4 flex gap-3 flex-col items-start">
          <Timeline>
            <Timeline.Time>18 feb, 2024</Timeline.Time>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>Added timeline component</Timeline.Title>
                <Timeline.Body>
                  <p>It's created with dot notaion. The code is taken from my other project.</p>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>
                  Refactor Timeline component styles
                </Timeline.Title>
                <Timeline.Body>
                  <p>
                    The styles of this component are not suitable for this project and need to be changed today or tomorrow.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>Lorem</Timeline.Title>
                <Timeline.Body>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id pariatur molestias.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Time>19 feb, 2024</Timeline.Time>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>My plans</Timeline.Title>
                <Timeline.Body>
                  <p>
                    Later i will need to make the option to double-sided Lifetime component.
                  </p>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </main>
    </>
  )
}

export default App
