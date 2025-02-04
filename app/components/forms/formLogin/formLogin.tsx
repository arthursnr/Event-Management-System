"use client"

import { useRouter } from "next/navigation";

export function FormLogin() {

    const router = useRouter();

    const login = () => {
        router.push('/dashboard');
    };
    
    return (
        <>
            <div className="bg-black text-white w-screen h-screen">
                <h1>Event Management Sytem</h1>
                <form action="">
                    {/* login section */}
                    <fieldset>
                        <label htmlFor="login">E-mail:</label>
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            className="bg-black text-white"
                            required />
                    </fieldset>

                    {/* password section */}
                    <fieldset>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            className="bg-black text-white"
                            required />
                    </fieldset>
                </form>

                <button onClick={login}>Login</button>
            </div>
        </>
    );
}
