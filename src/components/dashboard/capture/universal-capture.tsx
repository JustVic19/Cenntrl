'use client'

import { Search } from "lucide-react"
import { useState } from "react"

export function UniversalCapture() {
    const [value, setValue] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!value.trim()) return

        // TODO: Create task in inbox via API
        console.log("Creating task:", value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9A9FA5]" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Capture a thought..."
                    className="w-full h-12 pl-12 pr-4 bg-[#F5F6FA] border border-transparent rounded-xl text-[15px] placeholder:text-[#9A9FA5] focus:bg-white focus:border-[#6C5DD3] focus:outline-none focus:ring-4 focus:ring-[#6C5DD3]/10 transition-all"
                />
            </div>
        </form>
    )
}
