"use client"

import { useRouter } from "next/navigation"

export function EventCards() {
    const router = useRouter();

    const eventPage = () => {
        router.push("/eventPage");
    }

    return (
            <div className="flex  flex-wrap gap-2 items-center justify-center">
                <div className="bg-[#E0E0E0] text-[#333333] rounded-lg">
                    <button
                        onClick={eventPage}
                        className="flex flex-col h-60 px-6 pt-8 pb-4  items-center justify-center">
                        <img src="/assets/img1.png" alt="Event Image" />
                        <h1>event title</h1>
                        <p>event description</p>
                    </button>
                </div>

                <div className="bg-[#E0E0E0] text-[#333333] rounded-lg">
                    <button
                        onClick={eventPage}
                        className="flex flex-col h-60 px-6 pt-8 pb-4 items-center justify-center">
                        <img src="/assets/img1.png" alt="Event Image" />
                        <h1>event title</h1>
                        <p>event description</p>
                    </button>
                </div>

                <div className="bg-[#E0E0E0] text-[#333333] rounded-lg">
                    <button
                        onClick={eventPage}
                        className="flex flex-col h-60 px-6 pt-8 pb-4 items-center justify-center">
                        <img src="/assets/img1.png" alt="Event Image" />
                        <h1>event title</h1>
                        <p>event description</p>
                    </button>
                </div>

                <div className="bg-[#E0E0E0] text-[#333333] rounded-lg">
                    <button
                        onClick={eventPage}
                        className="flex flex-col h-60 px-6 pt-8 pb-4 items-center justify-center">
                        <img src="/assets/img1.png" alt="Event Image" />
                        <h1>event title</h1>
                        <p>event description</p>
                    </button>
                </div>
            </div>
    )
}