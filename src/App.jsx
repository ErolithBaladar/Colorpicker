import { useState } from 'react'
// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

<div id="colors-list">
  <Color color="red"/>
  <Color color="blue"/>
  <Color color="green"/>
</div>
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="navbar">
    <div>Currently selected: </div>
    <div className={selectedColor}>{selectedColor}</div>

  <div className={selectedColor}>{selectedColor}</div>
  <div id="colors-list">
  <Color color="red" setSelectedColor={setSelectedColor}/>
  <Color color="blue" setSelectedColor={setSelectedColor}/>
  <Color color="green" setSelectedColor={setSelectedColor}/>
</div>

      {/* <div id="navbar">
        <div>Currently selected: </div>
        <div id="colors-list">
          <Color color="red" />
          <Color color="blue" />
          <Color color="green" />
        </div>
        <div className="red">red</div>
      </div> */}
      <div id="colors-list">
  <Color />
  <Color />
  <Color />
  </div>
    </div>
  );
};

export default App;
