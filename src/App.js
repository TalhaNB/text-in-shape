import './App.css';
import Diamond_Path from './components/DiamondPath';
import {useState} from "react"

function App() {
  const [text, setText] = useState("");
  
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () =>{
    setText("")
  }
  return (
    <>
      <div>
        <h2>Using SVG Text Path</h2>
        <div>
          <input
          onChange={onChange}
          name="input"
          value={text}
          placeholder="enter input  "
          />
          <button onClick={onSubmit} type="button">
            Reset
          </button>        
        </div>
        <Diamond_Path text={text}/>
      </div>
    </>
  );
}

export default App;
