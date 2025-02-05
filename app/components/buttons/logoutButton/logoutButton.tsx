"use client"

import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();
    const logout = () => {
        router.push("/")
    }

    return (
        <button onClick={logout} className="inline-flex items-center gap-1">
            <img src="/assets/logoutButton.svg" alt="Logout" className="h-5 w-5" />
            Logout
        </button>

    )
 }