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
            <div id={"user-login-container"}>
                <br/>
                <h3 id={"login-heading"}>Register</h3>
                <form id={"cl-user-login-form"} onSubmit={handleSubmit}>
                    <div id={"cl-user-login-username-container"}>
                        <label htmlFor={"username"} className={"cl-user-label"}>Username</label> &nbsp;
                        <input type={"text"} id={"username"} className={"cl-user-input border border-white bg-transparent text-white px-3 py-2 rounded w-full mt-1"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div id={"cl-user-login-email-container"}>
                        <label htmlFor={"email"} className={"cl-user-label"}>Email</label> &nbsp;
                        <input type={"email"} id={"email"} className={"cl-user-input border border-white bg-transparent text-white px-3 py-2 rounded w-full mt-1"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div id={"cl-user-login-password-container"}>
                        <label htmlFor={"password"} className={"cl-user-label"}>Password</label> &nbsp;
                        <input type={"password"} id={"password"} className={"cl-user-input border border-white bg-transparent text-white px-3 py-2 rounded w-full mt-1"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type={"submit"} id={"login-button"} className={"cl-user-button hover:text-blue-600"}>Register</button>
                </form>
                <span id={"login-option"}>Already have an account? <a href={"#"}>Login</a></span>
            </div>
        </> 
    );
}