import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React ')

//jsx - is html and jsx like syntax

const elem = <span>I'm span</span>

// React Functional Component

const HeadingComponent = () => <h1>This is Functional componet Heading</h1>

const Title = () => (
  <h1 id='heading' className='head' tabIndex={1}>
    Namaste React using JSX
    <HeadingComponent />
  </h1>
)

const number = 10000

const HeadingComponent1 = () => (
  <>
    <>
      <>
        <div className='container'>
          <h1>This functional component</h1>
          <h2>{Title()}</h2>
        </div>
        <div className='container 2 '></div>
      </>
    </>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent1 />)
