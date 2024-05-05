import Header from './components/Header'
import Total from './components/Total'
import Content from './components/Content'

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </>
  )
}

export default App
