import './App.css';
import Diamond_Path from './components/DiamondPath';
import Shape from './components/Shape';
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
        <p>Enter Text here to see in shapes </p>
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
      <div>
        <h2>Using Shapes</h2>
        <Shape text={text}/>
      </div>
      <div>
        <h2>Using SVG Text Path (diamond as example)</h2>
        <Diamond_Path text={text}/>
      </div>
    </>
  );
}

export default App;
