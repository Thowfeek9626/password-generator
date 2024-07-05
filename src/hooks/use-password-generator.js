import { useState } from "react"

const usePasswordGenerator = () =>{
    const [password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const generatePassword = (checkboxData,length) =>{
        let charset = "", generatePassword = ""
        const selectedOptions = checkboxData.filter((checkbox)=>checkbox.state)
        if(selectedOptions.length === 0){
            setErrorMessage("Select atleast one option");
            setPassword("");
            return
        }
        selectedOptions.forEach((option)=>{
            switch(option.title){
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYYZ"
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include Numbers":
                    charset += "0123456789"
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()"
                    break;
                default:
                    break;
            }
        });
        for(let i=0; i<length;i++){
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatePassword += charset[randomIndex];
            setPassword(generatePassword)
            setErrorMessage("")
        }
    }
    return{password,errorMessage,generatePassword}
}

export default usePasswordGenerator;