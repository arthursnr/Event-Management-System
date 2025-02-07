"use client"

import { useRouter } from "next/navigation";



export function BackButton() {


    const router = useRouter();

    return (
        <button className="inline-flex items-center gap-4 text-2xl font-medium"
            type="button"
            onClick={() => router.back()}> 
            <img src="/assets/backButton.svg" className="h-5 w-5" />
            voltar
        </button>
    )
}