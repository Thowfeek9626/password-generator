import React from "react";

const PasswordStrengthIndicator = ({password}) =>{
    const getPasswordStrength = ()=>{
        const passwordLength = password?.length;
        if(passwordLength < 1 || !password){
            return ""
        }else if(passwordLength < 4){
            return "Very weak"
        }else if(passwordLength < 8){
            return "Poor"
        }else if(passwordLength < 12){
            return "Medium"
        }else if(passwordLength < 16){
            return "Strong"
        }else{
            return "Very Strong"
        }
    }
    const passwordStrength = getPasswordStrength()
    if(!passwordStrength) return <React.Fragment/>;
    return (
        <div className="password-strength">
            Stregth: <span style={{fontWeight:"bold"}}>{passwordStrength}</span>
        </div>
    )
}
export default PasswordStrengthIndicator