import React, { useState } from 'react'

export const BatsMn = () => {
    const [runs, setRuns] = useState(10);

    const hanleSingle = () =>{
        const updateRun = runs + 1;
        setRuns(updateRun);
    }

    const handleSix = () =>{
        const updateRun = runs + 6;
        setRuns(updateRun);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }

  return (
    <div>
        <h3> Playr: Bangla BatsMan  </h3>
        {
            runs > 50 && <p> Your score 50 </p>
        }
        <h2> Score: {runs} </h2>
        <button onClick={hanleSingle}> single </button>
        <button onClick={handleFour}> Four </button>
        
        <button onClick={handleSix} > six </button>

    </div>
  )
}
