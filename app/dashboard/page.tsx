import { MenuButton } from "../components/buttons/menuButton/menuButton";
import { EventCards } from "../components/eventCards/eventCards";

export default function DashBoard() {
    return (
        <div className="h-screen w-screen">
            <div className="w-screen">
                <header className="flex justify-between items-center bg-white shadow-md w-screen pt-14 pb-6 px-7">
                    <h1 className="text-xl leading-none font-bold">Events Management System</h1>

                    <div className="flex justify-center items-center">
                        <MenuButton />
                    </div>
                </header>

            </div>
            <div className="bg-[#F5F5F5] shadow-2xl w-screen h-screen py-4">
                <EventCards />
            </div>
            <div className="w-screen flex items-center justify-center">
                <footer className="bg-white py-3 px-4 flex justify-center items-center fixed bottom-0 w-full">
                    <ul className="flex items-center justify-between w-full flex-wrap gap-1 font-normal text-sm leading-none">
                        <p className="text-gray-600 text-sm font-bold">Event Management System</p>
                        <p className="text-[#333333] text-[10px] font-normal">© 2025 - All rights reserved.</p>
                    </ul>
                </footer>
            </div>

        </div>
    )
}