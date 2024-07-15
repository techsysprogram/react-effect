import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function App() {


  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // effect , osea despues del effect te muestra el valor actual
    console.log("effect", count)
    return () => {
      // cleanup , osea antes del effect te muestra el valor anterior
      console.log("cleanup" , count)
    }
  },[count]); // si no le pasas el array vacio se ejecuta cada vez que se renderiza el componente


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
