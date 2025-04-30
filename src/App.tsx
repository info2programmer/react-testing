


import { useState } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState<string>("")

  return (

    <>
      <h1>Jest Testing </h1>
      <button onClick={() => setdata("Hello")}>Update</button>
      <p>{data}</p>
    </>
  )
}

export default App
