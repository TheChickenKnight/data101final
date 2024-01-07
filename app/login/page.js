"use client"

import classNames from "classnames";

export default function Login() {
    function handleSubmit() {

    }

    const input = classNames("bg-black p-2 rounded-md m-1");


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-800 p-40 rounded-3xl">
                <form method="post" onSubmit={handleSubmit}>
                    <label>
                        <input className={input} name="user" defaultValue="Username"/>
                    </label>
                    <br/>
                    <label>
                        <input className={input} name="pass" defaultValue="Password"/>
                    </label>
                    <br/>
                    <button type="submit">Log in</button>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
}