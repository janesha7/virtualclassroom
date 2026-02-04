import React,{useState} from "react";
const App = ()=>{
  const[theme,setTheme]=useState("light");//default light
  const toggleTheme=()=>{
        setTheme(theme=== "light"?"Dark":"light")
  };
  const containerStyle={
    minHeight:"100vh",
    padding:"20px",
    backgroundColor:theme ===  "light"?"#222":"#fff",
    color:theme === "Dark"?"#030303":"#f4eeee"
  }
  return(
  <div style={containerStyle}>
    <h1>Theme Toggle Example</h1>
    <p>click the button to switch between Light and Dark Mode</p>
    <button onClick={toggleTheme}>Switch to{theme ==="light"?"Dark":"light"} DarkMode
    </button>
    <div style={{marginTop:"20px"}}>
    <p>Text color also changes according to the selected theme.</p>
  </div>
  </div>
  )
}
export default App;
