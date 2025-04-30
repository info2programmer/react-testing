


import { useState } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState<string>("")

  return (

    <>
      <h1>Test OnChange Event With Input Text</h1>
      <input type="text" value={data} placeholder='enter username' onChange={(e) => setdata(e.target.value + "test")} />
    </>
  )
}

export default App
