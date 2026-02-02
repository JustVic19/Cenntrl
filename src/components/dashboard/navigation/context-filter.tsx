'use client'

import { useState } from "react"

const contextTags = [
    { id: 'computer', label: '@Computer', icon: '💻' },
    { id: 'home', label: '@Home', icon: '🏠' },
    { id: 'office', label: '@Office', icon: '🏢' },
    { id: 'errands', label: '@Errands', icon: '🚗' },
    { id: 'phone', label: '@Phone', icon: '📞' },
]

export function ContextFilter() {
    const [selected, setSelected] = useState<string[]>([])

    const toggleTag = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        )
    }

    return (
        <div className="flex flex-wrap gap-2">
            {contextTags.map((tag) => (
                <button
                    key={tag.id}
                    onClick={() => toggleTag(tag.id)}
                    className={`
            flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border
            ${selected.includes(tag.id)
                            ? 'bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] text-white border-[#6C5DD3] shadow-md'
                            : 'text-[#6F767E] border-[#E5E7EB] bg-white hover:border-[#6C5DD3] hover:bg-[#F5F6FA]'
                        }
          `}
                >
                    <span>{tag.icon}</span>
                    <span>{tag.label}</span>
                </button>
            ))}
        </div>
    )
}
