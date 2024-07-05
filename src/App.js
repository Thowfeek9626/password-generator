import "./App.css"
import { useState } from "react"
import usePasswordGenerator from "./hooks/use-password-generator"
import PasswordStrengthIndicator from "./components/StrengthChecker"

export default function App(){
  const[length,setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title:"Include Uppercase Letters", state:false},
    {title:"Include Lowercase Letters", state:false},
    {title:"Include Numbers", state:false},
    {title:"Include symbols", state:false}
  ])
  const [copied,setCopied] = useState(false)
  const handleCopy = () =>{
    navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },1000)
}
  const {password,errorMessage,generatePassword} = usePasswordGenerator()
  const handleCheckboxChange = (i)=>{
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state
    setCheckboxData(updatedCheckboxData)
  }
  return (<div className="container">
    {password && <div className="header">
      <div className="title">{password}</div>
      <button className={`copyBtn ${copied ? "copied" : ""}`} onClick={()=>{handleCopy()}}>{copied ? "Copied" : "Copy"}</button>
    </div>}
    <div className="charLength">
    <span>
      <label>Character Length</label>
      <label>{length}</label>
    </span>
    <input
    type="range"
    value={length}
    min={4}
    max={20}
    onChange={(e)=>{setLength(e.target.value)}}
    />
    </div>
    <div className="checkboxes">
    {checkboxData.map((checkbox,i)=>{
      return(<div key={checkbox.title}>
        <input
        onChange={()=>{handleCheckboxChange(i)}}
        type="checkbox"
        checked={checkbox.state}
        />
        <label>{checkbox.title}</label>
      </div>)
    })}
    </div>
    {<PasswordStrengthIndicator password={password}/>}
    {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    <button className="generateBtn" onClick={()=>{generatePassword(checkboxData,length)}}>Generate Password</button>
  </div>)
}