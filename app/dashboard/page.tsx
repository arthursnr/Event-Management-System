import { NewEventButton } from "../components/buttons/newEventButton/newEventButton";
import { EventCards } from "../components/eventCards/eventCards";

export default function DashBoard() {
    return (
        <>
            <div className="">
                <div>
                    <header className="flex gap-8">
                        <h1>Events Management System</h1>
                        <NewEventButton />
                    </header>
                    <div className="border-2 shadow-2xl w-screen h-screen">
                        <EventCards />
                    </div>
                </div>
            </div>
        </>
    )
}