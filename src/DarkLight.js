import {useState} from 'react'


export function DarkLight() {

  const [mode,setMode] = useState("dark")

  const styles={
    background:  mode === "light"?"white":"black",
    color: mode === "light"?"black":"white",
    height: "100vh"
  }

  const styles1={
       background: mode === "light"?"white":"gold",
       color: "red",
  } 
   return (
    <div className='dark-light' style={styles}>
      <h1>Dark Light Theme Experiment</h1>
      <button style={styles1} onClick={()=>{setMode("light")}}>Light Mode</button><br />
      <button style={styles1} onClick={()=>{setMode("dark")}}>Dark Mode</button>
    </div>
  );
}
