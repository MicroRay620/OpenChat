import "./Login.css";
import React from "react";
import { invoke } from "@tauri-apps/api/core";
function Login() {
    const username: string = "username";
    const email: string = "email";
    const password: string = "password";
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
            <span itemID={"login-option"}>Already have an account? <a hrefLang="#">Login</a></span>
        </div>
    );
}
export default  Login();
