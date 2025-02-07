"use client"

import { useRouter } from "next/navigation"

export function EditEventButton() {

    const router = useRouter();
    const editEvent = () => {
        router.push('/editEventPage')
    }
    return (
        <button onClick={editEvent} className="min-w-52 h-12 py-3 px-6 rounded-lg text-base leading-none bg-[#007AFF] text-white">Edit event</button>
    )
}