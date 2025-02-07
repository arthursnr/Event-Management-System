"use client"

import { useRouter } from "next/navigation";

export function FormNewEvent() {

    const router = useRouter();
    const registerNewEvent = () => [
        router.push('/dashboard')
    ]

    return (
        <>
            <div>
                <header className="flex gap-4 justify-start items-center w-screen text-xl leading-none font-bold pt-5 pb-3 px-7">
                    <button
                        type="button"
                        onClick={router.back}
                        className="inline-flex items-center gap-4">
                        <img src="/assets/closebutton.svg" alt="" className="h-5 w-5" />

                    </button>
                    <div className="flex flex-col gap-2 leading-none">
                        <h1 className="font-bold text-2xl text-[#333333]">Create and share <br /> your event</h1>
                        <p className="text-[#85b1e0] text-base">The first step <br /> is to fill this registration form.</p>
                    </div>
                </header>
            </div>

            <div className="flex flex-col  justify-center items-center w-screen bg-[#F5F5F5]">
                <div className="flex flex-col gap-4 w-11/12 max-w-[400px] p-6 rounded-xl shadow-md  text-[#333333]">
                    <form action="" className="flex flex-col gap-12 w-full">
                        <fieldset className="flex flex-col gap-2 w-full text-base leading-none rounded-lg">
                            <div className="flex flex-col gap-6">
                                <legend className="font-semibold text-2xl pb-4 border-b border-solid border-[#85b1e0]">Event informations</legend>
                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="eventName">Event Title <span>{"(minimum 8 characters)"}</span></label>
                                    <input type="text"
                                        name="eventName"
                                        id="eventName"
                                        className="text-[#333333] rounded-lg p-3"
                                        placeholder="Event title"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="eventLogo">Event Logo</label>
                                    <div className="flex flex-col gap-y-3 w-full py-3 px-8 rounded-lg">
                                        <input type="file" id="eventLogo" name="eventLogo" accept="image/*" className="hidden" />
                                        <label htmlFor="dishImage" className="flex items-center gap-2 cursor-pointer w-full">
                                            <img src="/assets/upload.svg" alt="Upload" />
                                            <span>Selecione imagem</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="eventLink">Event link <span>{"(starts with https://)"}</span></label>
                                    <input type="url"
                                        name="eventLink"
                                        id="eventLink"
                                        className="text-[#333333] rounded-lg p-3"
                                        placeholder="Event link"
                                        required />
                                </div>

                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="contact">Whatsapp for contact <span>{"(only numbers)"}</span></label>
                                    <input type="number"
                                        name="contact"
                                        id="contact"
                                        className="text-[#333333] rounded-lg p-3"
                                        placeholder="(00) 000000-0000"
                                        required />
                                </div>

                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="eventDescription">Event description</label>
                                    <textarea
                                        name="eventDescription"
                                        id="eventDescription"
                                        className=" text-[#333333] rounded-lg p-3 h-40 resize-none"
                                        placeholder="Event description"
                                    ></textarea>
                                </div>

                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="eventName">Category</label>
                                    <select className="text-[#333333] rounded-lg p-3 w-full">
                                        <option value="" hidden>Event Category</option>
                                        <option value="live">Live</option>
                                        <option value="podcast">Podcast</option>
                                        <option value="mentorship">Mentorship</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="w-full text-base leading-none rounded-lg">
                            <div className="flex flex-col gap-6">
                                <legend className="font-semibold text-2xl pb-4 border-b border-solid border-[#85b1e0]">Privacy</legend>
                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="organizerEmail">Event Organizer's email <span>{"(Please insert a valid email)"}</span></label>
                                    <input type="email"
                                        name="organizerEmail"
                                        id="organizerEmail"
                                        className="text-[#333333] rounded-lg p-3"
                                        placeholder="example@example.com"
                                        required />
                                </div>

                                <div className="flex flex-col gap-y-3 w-full">
                                    <label htmlFor="password">Participants invite key</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        className="p-3 rounded-lg text-[#333333]"
                                        placeholder="Your password"
                                        required />
                                </div>

                                <div className="flex items-center gap-3 w-full">
                                    <input type="checkbox"
                                        name="eventPrivacy"
                                        id="eventPrivacy"
                                        className="size-4 rounded-lg"
                                        required />
                                    <label htmlFor="password">Private event</label>
                                </div>
                            </div>
                        </fieldset>

                        {/* password section */}
                        <fieldset className="w-full text-base leading-none rounded-lg">
                            <div className="flex flex-col gap-6">
                                <legend className="font-semibold text-2xl pb-4 border-b border-solid border-[#85b1e0]">Time and Date</legend>
                                <div className="flex flex-col gap-y-3 w-full">
                                    <div className="flex flex-col gap-y-3">
                                        <label htmlFor="date">Date</label>
                                        <input type="date"
                                            name="date"
                                            id="date"
                                            className=" p-3 rounded-lg text-[#333333]"
                                            required />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-x-3 w-full">
                                    <div className="basis-1/2">
                                        <div className="flex flex-col gap-y-3">
                                            <label htmlFor="startTime">Start Time</label>
                                            <input type="time"
                                                name="startTime"
                                                id="startTime"
                                                className="px-2 py-3 rounded-lg text-[#333333]"
                                                required />
                                        </div>
                                    </div>

                                    <div className="basis-1/2">
                                        <div className="flex flex-col gap-y-3">
                                            <label htmlFor="endTime">End Time</label>
                                            <input type="time"
                                                name="endTime"
                                                id="endTime"
                                                className="px-2 py-3 rounded-lg text-[#333333]"
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <button onClick={registerNewEvent} className="w-full h-12 rounded-lg text-base leading-none bg-[#007AFF] text-white">Register event</button>

                </div>

            </div >

        </>
    )
}


