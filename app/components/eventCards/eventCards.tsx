"use client"

import { useRouter } from "next/navigation"

export function EventCards() {
    const router = useRouter();

    const eventPage = () => {
        router.push("/eventPage");
    }

    return (
        <button
            onClick={eventPage}
            className="flex flex-col bg-slate-600 px-6 pt-8 pb-4 rounded-lg">
            <img src="/assets/img1.png" alt="Event Image" />
            <h1>event title</h1>
            <p>event description</p>
        </button>
    )
}