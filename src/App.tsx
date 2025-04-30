


import { useState } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState<string>("")

  return (

    <>
      <h1>Test Click Event With Button</h1>
      <button onClick={() => setdata("Hello")}>Click Me</button>
      <p>{data}</p>
    </>
  )
}

export default App
