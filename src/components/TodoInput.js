import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
    <h1 className="app-heading">__TODOLIST__</h1>
    <div>
<div className="in">
<input

        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      </div>
      
      <div className="bttn">
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add task</button>
    </div>
    </div>
    </div>
   );}


export default TodoInput;