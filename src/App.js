import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <h1>Button Components</h1>
      <div className="container">
        <div className="card">
          <span>&lt;Button /&gt;</span>
          <Button>Default</Button>
        </div>

        <div className="card">
          <span>&lt;Button variant='outline' /&gt;</span>
          <Button variant="outline" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button variant='text' /&gt;</span>
          <Button variant="text" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button disableShadow /&gt;</span>
          <Button disableShadow color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button disabled /&gt;</span>
          <Button disabled>Default</Button>
        </div>

        <div className="card">
          <span>&lt;Button variant="text" disabled /&gt;</span>
          <Button variant="text" disabled>
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button startIcon="local_grocery_store" /&gt;</span>
          <Button startIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button endIcon="local_grocery_store" /&gt;</span>
          <Button endIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button size="sm" /&gt;</span>
          <Button size="sm" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button size="md" /&gt;</span>
          <Button size="md" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button size="lg" /&gt;</span>
          <Button size="lg" color="primary">
            Default
          </Button>
        </div>

        <div className="card">
          <span>&lt;Button color="default" /&gt;</span>
          <Button color="default">Default</Button>
        </div>

        <div className="card">
          <span>&lt;Button color="primary" /&gt;</span>
          <Button color="primary">Default</Button>
        </div>

        <div className="card">
          <span>&lt;Button color="secondary" /&gt;</span>
          <Button color="secondary">Default</Button>
        </div>

        <div className="card">
          <span>&lt;Button color="danger" /&gt;</span>
          <Button color="danger">Default</Button>
        </div>
      </div>
    </>
  )
}

export default App
