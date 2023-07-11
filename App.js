/**
 *
 * <div id=parent>
 *   <div id = child>
 *    <h1>i am h1</h1>
 *    <h2>i am h2</h1>
 *   </div>
 * <div id = child2>
 *    <h1>I am h1 tag</h1>
 *    <h2>I am h2 tag</h1>
 *   </div>
 * </div>
 */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello from the h1'),
    React.createElement('h1', {}, 'Hello from the h2')
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Hello from the h1'),
    React.createElement('h1', {}, 'Hello from the h2')
  ])
])

const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello from the react'
)
// console.log(heading) // object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
// console.log(root.render(heading))
