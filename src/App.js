import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime + 10)
      },10)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])
  return (
    <div className='App'>
      <div className="stopWatch">
        <div className='time'>
          <span className='minutes'>{("0" + Math.floor((time/60000)%60 )).slice(-2)} : </span>
          <span className='seconds'>{("0" + Math.floor((time/1000)%60)).slice(-2)} : </span>
          <span className='milliSeconds'>{("0" + ((time/10)%100)).slice(-2)} </span>
        </div>
        
        <div className='buttons'>
          {!timerOn && time == 0 && (
            <button className = 'startButton' onClick={() => setTimerOn(true)}>Start</button>
          )}

          {timerOn && (
            <button className = 'stopButton' onClick={() => setTimerOn(false)}>Stop</button>
          )}

          {!timerOn && time !== 0 &&(
            <button className = 'resumeButton' onClick={() => setTimerOn(true)}>Resume</button>
          )}

          {!timerOn && time > 0 && (
            <button className = 'resetButton' onClick={() => setTime(0)}>Reset</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
