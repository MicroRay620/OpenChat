import "./styles/Login.css";
import { useState } from "react";
export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ username, email, password });
    };

    return (
        <>
            <br/>
            <div id={"user-login-container"}>
                <h3 id={"login-heading"}>Register</h3>
                {/*
                * Make into a table form
                */}
                <form id={"user-login-form"} onSubmit={handleSubmit}>
                    <label htmlFor={"username"} className={"cls-user-label"}>Username</label> &nbsp;
                    <input type={"text"} id={"username"} className={"cls-user-input"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    {/*
                        * The <br/> are temporary, they will be changed for divs 
                    */}
                    <label htmlFor={"email"} className={"cls-user-label"}>Email</label> &nbsp;
                    <input type={"email"} id={"email"} className={"cls-user-input"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <label htmlFor={"password"} className={"cls-user-label"}>Password</label> &nbsp;
                    <input type={"password"} id={"password"} className={"cls-user-input"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button type={"submit"} id={"login-button"} className={"cls-user-button hover:text-blue-600"}>Register</button>
                </form>
                <span id={"login-option"}>Already have an account? <a href={"#"}>Login</a></span>
            </div>
        </>
       
    );
}