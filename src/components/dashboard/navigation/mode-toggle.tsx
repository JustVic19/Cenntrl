'use client'

import { useState } from "react"

const modes = [
    { id: 'deep', label: 'Deep Work', icon: '🎯' },
    { id: 'light', label: 'Light Admin', icon: '📋' },
] as const

type Mode = typeof modes[number]['id']

export function ModeToggle() {
    const [activeMode, setActiveMode] = useState<Mode>('deep')

    return (
        <div className="flex items-center gap-2 bg-white rounded-xl p-1.5 shadow-sm">
            {modes.map((mode) => (
                <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`
            flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all
            ${activeMode === mode.id
                            ? 'bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] text-white shadow-lg'
                            : 'text-[#6F767E] hover:bg-[#F5F6FA]'
                        }
          `}
                >
                    <span>{mode.icon}</span>
                    <span>{mode.label}</span>
                </button>
            ))}
        </div>
    )
}
