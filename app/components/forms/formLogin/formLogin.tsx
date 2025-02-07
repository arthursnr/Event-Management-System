"use client"

import { useRouter } from "next/navigation";

export function FormLogin() {

    const router = useRouter();

    const login = () => {
        router.push('/dashboard');
    };

    const createAccount = () => {
        router.push('/newUser')
    }

    return (
        <>
           <div className="fixed  flex flex-col justify-start items-center w-screen text-xl leading-none font-bold pt-14 pb-6 px-7">
                <h1>Event Management Sytem</h1>
            </div>

            <div className="flex flex-col justify-center items-center w-screen h-screen">
                <div className="flex flex-col gap-2 w-11/12 max-w-[400px] p-6 bg-white rounded-xl shadow-md ">
                    <form action="" className="flex flex-col gap-2 ">
                        {/* login section */}
                        <fieldset className="flex flex-col gap-1 w-full text-base leading-none rounded-lg">
                            <label htmlFor="login">E-mail:</label>
                            <input type="email"
                                name="email"
                                id="email"
                                className="text-[#333333] p-3"
                                placeholder="example@example.com"
                                required />
                        </fieldset>

                        {/* password section */}
                        <fieldset className="flex flex-col gap-1 w-full text-base leading-none rounded-lg">
                            <label htmlFor="password">Password:</label>
                            <input type="password"
                                name="password"
                                id="password"
                                className="p-3 text-[#333333]"
                                placeholder="Your password"
                                required />
                        </fieldset>
                    </form>
                    <button onClick={login} className="w-full h-12 rounded-lg text-base leading-none bg-[#007AFF] text-white">Login</button>
                    <button onClick={createAccount} className="w-full h-12 rounded-lg text-base leading-none bg-[#007AFF] text-white">Create account</button>
                </div>
            </div>
        </>
    );
}
