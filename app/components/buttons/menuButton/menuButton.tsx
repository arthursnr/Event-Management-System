"use client"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation"


export function MenuButton() {

    const router = useRouter();

    const menu = () => {
        router.push("/menuPage")
    }

    return (
        <button onClick={menu}>
            <HamburgerMenuIcon/>
        </button>
    )
}