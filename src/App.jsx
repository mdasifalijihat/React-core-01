
import './App.css'
import { BatsMn } from './BatsMn'

function App() {

  function handleClick(){
    alert('I am cliked')
  }

  const handleClick3 = ()=>{
    alert('clike 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num +5;
    alert(newNum)

  }

  return (
    <>    
    <BatsMn></BatsMn>
      <h1>Vite + React</h1> 
      {/* <button onClick={''}> Click me  </button>     */}
      <button onClick={handleClick}> Click me  </button> 

      <button onClick={function hnaleClick(){alert('clike 2')}}> Click me 2 </button>    

      <button onClick={handleClick3}> click me 3 </button>

      <button onClick={() => handleAdd5(10)}> click add 5 </button>
     
    </>
  )
}

export default App
