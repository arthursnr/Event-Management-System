"use client"

import { useRouter } from "next/navigation"

export function ExitButton() {

    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-4">
            <img src="/assets/closebutton.svg" alt="" className="h-5 w-5" />
            <h1 className="text-xl">Menu</h1>
        </button>
    )
}