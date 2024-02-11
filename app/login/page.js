"use client"

import classNames from "classnames";
import { useRouter } from "next/router";


export default function Login() {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const user = formData.get("user");
        const pass = formData.get("pass");

        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({user, pass})
        })

        if (response.ok)
            router.push("/profile");
        else {
            //issues
        }
    }

    const input = classNames("bg-black p-2 rounded-md m-1");


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-800 p-40 rounded-3xl">
                <form onSubmit={handleSubmit}>
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