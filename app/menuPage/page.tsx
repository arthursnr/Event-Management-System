import { ExitButton } from "../components/buttons/exitButton/exitButton";
import { LogoutButton } from "../components/buttons/logoutButton/logoutButton";
import { NewEventButton } from "../components/buttons/newEventButton/newEventButton";
import { FormSearch } from "../components/forms/formSearch/formSearch";

export default function MenuPage() {

    return (
        <>
            <div className="w-screen h-screen bg-slate-400">
                <div className="w-screen">
                    <header className="font-roboto flex bg-white shadow-md  items-center pt-14 pb-6 px-7 gap-4">
                        <ExitButton />
                    </header>

                </div>


                <div className="pt-9 px-7 pb-3 flex flex-col gap-9">
                    <FormSearch />

                    <div className="flex flex-col items-start">
                        <NewEventButton />
                        <LogoutButton />
                    </div>

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
        </>
    )
}