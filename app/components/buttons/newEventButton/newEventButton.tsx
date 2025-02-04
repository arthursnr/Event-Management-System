"use client"

import { useRouter } from "next/navigation"

export function NewEventButton() {
    const router = useRouter();
    const NewEvent = () => {
        router.push('/newEventPage');
    }
    return (
        <button onClick={NewEvent}>Create New Event</button>
    )
}