"use client"

import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();
    const logout = () => {
        router.push("/")
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}