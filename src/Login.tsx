import "./Login.css";
import { useState } from "react";
function Login() {
    const [username, setState]: string = useState("name");
    const [email, setState]: string = "email";
    const [password, setState]: string = "password";
    return (
        <div itemID={"user-login-container"}>
            <h3 itemID={"login-heading"} className={""}></h3>
            <form itemID={"user-login-form"}>
                <label htmlFor={"username"} className={"cls-user-label"}>Username</label>
                <input type={"text"} itemID={"username"} className={"cls-user-input"} value={username}/>

                <label htmlFor={"email"} className={"cls-user-label"}>Email</label>
                <input type={"email"} itemID={"email"} className={"cls-user-input"} value={email}/>
                
                <label htmlFor={"password"} className={"cls-user-label"}>Password</label>
                <input type={"password"} itemID={"password"} className={"cls-user-input"} value={password}/>
                <button type={"submit"} itemID={"login-button"} className={"cls-user-button"}>Register</button>
            </form>
            <span itemID={"login-option"}>Already have an account? <a href={"#"}>Login</a></span>
        </div>
    );
}
export default  Login();
