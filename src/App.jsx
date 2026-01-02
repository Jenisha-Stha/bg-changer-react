import { useState } from "react"


function App() {
 
const [color, setColor] = useState("olive")

const changeColor = (newColor) =>{
  setColor(newColor)
}
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"><div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl"> 
        <button className="outline-none px-6 py-2 text-white shadow-lg rounded-full" style={{background: "red"}} onClick={() => changeColor("red")}>red</button>
        <button className="outline-none px-6 py-2 text-white shadow-lg rounded-full" style={{background: "green"}}  onClick={() => changeColor("green")}>green</button><button className="outline-none px-6 py-2 text-white shadow-lg rounded-full" style={{background: "blue"}}  onClick={() => setColor("blue")}>blue</button>
        <button className="outline-none px-6 py-2 text-white shadow-lg rounded-full" style={{background: "yellow"}}  onClick={() => setColor("yellow")}>yellow</button>
        <button className="outline-none px-6 py-2 text-white shadow-lg rounded-full" style={{background: "black"}}  onClick={() => setColor("black")}>black</button>
      </div>
      </div>
      
    </div>
  )
}

export default App
