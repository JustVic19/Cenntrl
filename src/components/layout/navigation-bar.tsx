'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Settings,
    Bell,
    Search,
    ChevronDown,
    LayoutGrid,
    TrendingUp,
    Wallet,
    Activity
} from 'lucide-react'

// Define the Hubs and their Dashboards
const NAVIGATION_HUBS = [
    {
        name: "Command",
        icon: <LayoutGrid size={16} />,
        dashboards: ["Mission Control", "GTD System", "Focus Room"]
    },
    {
        name: "Growth",
        icon: <TrendingUp size={16} />,
        dashboards: ["Goal Tracking", "Skill Tree", "Notebook", "Book Shelf"]
    },
    {
        name: "Life",
        icon: <Wallet size={16} />,
        dashboards: ["Finance OS", "Personal CRM", "Productivity Journal"]
    },
    {
        name: "Vitality",
        icon: <Activity size={16} />,
        dashboards: ["Fitness Tracker", "Macro Tracker"]
    }
]

export function NavigationBar() {
    const router = useRouter()
    const [activeHub, setActiveHub] = useState("Command")
    const [activeDashboard, setActiveDashboard] = useState("GTD System")
    const [hoveredHub, setHoveredHub] = useState<string | null>(null)

    // Map dashboard names to routes
    const dashboardRoutes: { [key: string]: string } = {
        "Mission Control": "/mission",
        "GTD System": "/dashboard",
        "Focus Room": "/focus",
        "Goal Tracking": "/goals",
        "Skill Tree": "/skills",
        "Notebook": "/notebook",
        "Book Shelf": "/books",
        "Finance OS": "/finance",
        "Personal CRM": "/crm",
        "Productivity Journal": "/journal",
        "Fitness Tracker": "/fitness",
        "Macro Tracker": "/macros"
    }

    return (
        // Top Bar Container (Fixed Height, Single Row)
        <header className="w-full h-20 flex items-center justify-between px-8 bg-[#F2F5F9]">

            {/* Left: Brand / Logo */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="font-bold text-2xl tracking-tight text-neutral-900">Cenntrl.</span>
            </div>

            {/* Right: Navigation Pills + System Actions & Profile */}
            <div className="flex items-center gap-4">

                {/* Hub Navigation Pills */}
                <nav className="flex items-center gap-2 bg-white px-2 py-1.5 rounded-full shadow-sm border border-gray-100 relative">
                    {NAVIGATION_HUBS.map((hub) => {
                        const isActive = activeHub === hub.name
                        const isOpen = hoveredHub === hub.name

                        return (
                            <div
                                key={hub.name}
                                className="relative"
                            >
                                {/* The Hub Pill - Click to toggle */}
                                <button
                                    onClick={() => {
                                        if (isOpen) {
                                            setHoveredHub(null)
                                        } else {
                                            setHoveredHub(hub.name)
                                        }
                                    }}
                                    className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                  ${isActive
                                            ? "bg-black text-white shadow-lg"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                        }
                `}
                                >
                                    {hub.icon}
                                    {hub.name}
                                    <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* The Click Dropdown */}
                                {isOpen && (
                                    <>
                                        {/* Invisible overlay to close dropdown when clicking outside */}
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setHoveredHub(null)}
                                        />

                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2">
                                            {hub.dashboards.map((dashboard) => (
                                                <button
                                                    key={dashboard}
                                                    onClick={() => {
                                                        setActiveHub(hub.name)
                                                        setActiveDashboard(dashboard)
                                                        setHoveredHub(null)
                                                        // Navigate to the dashboard route
                                                        const route = dashboardRoutes[dashboard]
                                                        if (route) {
                                                            router.push(route)
                                                        }
                                                    }}
                                                    className={`
                          w-full text-left px-4 py-2.5 text-sm transition-colors
                          ${activeDashboard === dashboard
                                                            ? "text-black font-semibold bg-gray-100"
                                                            : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                                        }
                        `}
                                                >
                                                    {dashboard}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </nav>

                {/* Action Buttons (Settings / Notification) */}
                <div className="flex items-center gap-2">
                    <button className="p-3 rounded-full bg-white text-gray-400 hover:text-[#6C5CE7] hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                        <Settings size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-white text-gray-400 hover:text-[#6C5CE7] hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>

                {/* Profile Dropdown */}
                <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white border border-transparent hover:border-gray-200 transition-all hover:shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] flex items-center justify-center text-white font-bold">
                        V
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-gray-900 leading-none">Victor</p>
                        <p className="text-[10px] font-medium text-gray-400 leading-none mt-1">Pro Plan</p>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                </button>

            </div>
        </header>
    )
}
