"use client"

import { useRouter } from "next/navigation"

export function NewEventButton() {
    const router = useRouter();
    const NewEvent = () => {
        router.push('/newEventPage');
    }
    return (
        <button onClick={NewEvent} className="inline-flex items-center gap-1">
            <img src="/assets/addButton.svg" alt="New Event" className="h-5 w-5"/>
            Create New Event
            </button>
    )
}