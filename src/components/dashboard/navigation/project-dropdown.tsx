'use client'

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const projects = [
    { id: 'all', label: 'All Projects' },
    { id: 'cenntrl', label: 'Cenntrl' },
    { id: 'finance', label: 'Finance' },
    { id: 'content', label: 'Content' },
    { id: 'home', label: 'Home' },
]

export function ProjectDropdown() {
    const [selected, setSelected] = useState('all')
    const [isOpen, setIsOpen] = useState(false)

    const selectedProject = projects.find(p => p.id === selected)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-[#1A1D1F] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#2A2D2F] transition-colors"
            >
                <span>{selectedProject?.label}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] p-2 min-w-[180px] z-20">
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => {
                                    setSelected(project.id)
                                    setIsOpen(false)
                                }}
                                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${selected === project.id
                                        ? 'bg-[#F5F6FA] text-[#6C5DD3] font-semibold'
                                        : 'text-[#6F767E] hover:bg-[#F5F6FA]'
                                    }
                `}
                            >
                                {project.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
