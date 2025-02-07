import { BackButton } from "../components/buttons/backButton/backButton";
import { EditEventButton } from "../components/buttons/editEvent/editEvent";
import { MenuButton } from "../components/buttons/menuButton/menuButton";

export default function EventPage() {

    return (
        <div className="w-screen min-h-screen bg-[#F5F5F5]">
            <div className="w-screen">
                <header className="flex justify-between items-center bg-white shadow-md w-screen pt-14 pb-6 px-7">
                    <h1 className="text-xl leading-none font-bold">Events Management System</h1>

                    <div className="flex justify-center items-center">
                        <MenuButton />
                    </div>
                </header>
            </div>

            <div className="flex flex-col gap-4 py-9 px-14">
                <BackButton />
                <div className="flex flex-col gap-4 items-center justify-center">
                    <img src="/assets/test.svg" alt="Event Logo" className="size-64" />
                    <div className="flex flex-col gap-12 w-full items-center justify-center">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-3xl">event title</h1>
                            <p className="text-base">event description</p>
                            <a href="https://www.google.com">Whatsapp contact</a>
                        </div>
                        <div className="">
                            <EditEventButton />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center">
                <footer className="bg-white py-3 px-4 flex justify-center items-center w-full shadow-md">
                    <ul className="flex items-center justify-between w-full flex-wrap gap-1 font-normal text-sm leading-none">
                        <p className="text-gray-600 text-sm font-bold">Event Management System</p>
                        <p className="text-[#333333] text-[10px] font-normal">© 2025 - All rights reserved.</p>
                    </ul>
                </footer>
            </div>
        </div>
    )
}