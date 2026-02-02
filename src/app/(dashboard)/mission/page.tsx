'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import { Activity, Zap, DollarSign, TrendingUp, MessageSquare, MapPin, Cloud, Bell, Plus, ChevronDown, Wallet, BookOpen, Sparkles } from "lucide-react"

export default function MissionControlPage() {
    const [chartTooltip, setChartTooltip] = useState<{ x: number; y: number; value: number; day: number } | null>(null)
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F2F5F9] p-8">
                <div className="max-w-[1440px] mx-auto">

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-[32px] font-bold text-[#1A1D1F]">Mission Control.</h1>
                        <p className="text-[#6F767E]">Your command center for life operations.</p>
                    </div>

                    {/* Main Layout: Sidebar (25%) + Content (75%) */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                        {/* ZONE B: LEFT COLUMN - The AI Commander */}
                        <div className="space-y-5">

                            {/* Morning Brief Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] flex items-center justify-center text-white text-2xl font-bold mb-3">
                                        V
                                    </div>
                                    <h2 className="text-xl font-bold text-[#1A1D1F]">Good Morning</h2>
                                    <p className="text-sm text-[#6F767E]">Victor</p>
                                    <p className="text-xs text-[#9A9FA5] mt-1">{today}</p>
                                </div>

                                {/* AI Brief */}
                                <div className="bg-[#F5F6FA] rounded-xl p-4 mb-4">
                                    <p className="text-sm text-[#1A1D1F] leading-relaxed">
                                        You have <span className="font-bold text-[#FF4D00]">3 hours</span> of deep work available today. Your first meeting is at <span className="font-bold">10:00 AM</span>.
                                    </p>
                                </div>

                                {/* Action Buttons with Labels */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="flex flex-col items-center gap-1">
                                        <button className="p-3 rounded-full bg-[#FF4D00] text-white hover:bg-[#E64400] transition-colors" title="Start Focus Mode">
                                            <Zap className="h-5 w-5" />
                                        </button>
                                        <span className="text-[10px] text-[#6F767E] font-medium">Focus</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <button className="p-3 rounded-full bg-[#F5F6FA] text-[#6F767E] hover:bg-gray-200 transition-colors" title="Do Not Disturb">
                                            <Bell className="h-5 w-5" />
                                        </button>
                                        <span className="text-[10px] text-[#6F767E] font-medium">DND</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <button className="p-3 rounded-full bg-[#F5F6FA] text-[#6F767E] hover:bg-gray-200 transition-colors" title="Activity Stats">
                                            <Activity className="h-5 w-5" />
                                        </button>
                                        <span className="text-[10px] text-[#6F767E] font-medium">Stats</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Context Card - Enhanced */}
                            <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                                <h3 className="font-semibold text-[15px] text-[#1A1D1F] mb-4">Quick Context</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                                            <Cloud className="h-5 w-5 text-[#FF9800]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1A1D1F]">Sunny, 72°F</p>
                                            <p className="text-xs text-[#9A9FA5]">Perfect weather</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-[#2196F3]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1A1D1F]">🏠 Home</p>
                                            <p className="text-xs text-[#9A9FA5]">Remote work</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#F3E5F5] flex items-center justify-center">
                                            <Activity className="h-5 w-5 text-[#9C27B0]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#1A1D1F]">Deep Work Mode</p>
                                            <p className="text-xs text-[#9A9FA5]">Focus enabled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MAIN CONTENT (3 columns) */}
                        <div className="lg:col-span-3 space-y-5">

                            {/* ZONE A: TOP VITALS STRIP - Floating/Transparent */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {/* Productivity Vital */}
                                <div className="p-4">
                                    <p className="text-xs text-[#9A9FA5] font-medium mb-2 uppercase tracking-wide">Tasks Today</p>
                                    <p className="text-4xl font-bold text-[#1A1D1F]">
                                        12<span className="text-2xl text-[#9A9FA5] font-normal">/15</span>
                                    </p>
                                    <p className="text-xs text-[#00C853] font-medium mt-1">Done</p>
                                </div>

                                {/* Health Vital */}
                                <div className="p-4">
                                    <p className="text-xs text-[#9A9FA5] font-medium mb-2 uppercase tracking-wide">Energy</p>
                                    <p className="text-4xl font-bold text-[#00C853]">85%</p>
                                </div>

                                {/* Finance Vital - with Budget Context and Dynamic Color */}
                                <div className="p-4">
                                    <p className="text-xs text-[#9A9FA5] font-medium mb-2 uppercase tracking-wide">Spent Today</p>
                                    <p className="text-4xl font-bold text-[#1A1D1F]">
                                        $45<span className="text-2xl text-[#9A9FA5] font-normal">/80</span>
                                    </p>
                                    {(() => {
                                        const remaining = 35
                                        const color = remaining < 10 ? '#FF4D00' : remaining < 20 ? '#FF9800' : '#00C853'
                                        return (
                                            <p className="text-xs font-medium mt-1" style={{ color }}>
                                                ${remaining} remaining
                                            </p>
                                        )
                                    })()}
                                </div>

                                {/* Growth Vital - with Progress Ring */}
                                <div className="p-4">
                                    <p className="text-xs text-[#9A9FA5] font-medium mb-2 uppercase tracking-wide">Level</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-4xl font-bold text-[#6C5DD3]">4</p>
                                        {/* Progress ring showing 65% to Level 5 */}
                                        <svg width="48" height="48" className="-rotate-90">
                                            <circle cx="24" cy="24" r="20" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#6C5DD3"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="125.6"
                                                strokeDashoffset="44"
                                                strokeLinecap="round"
                                                style={{
                                                    animation: 'progress-ring 1s ease-out forwards',
                                                    strokeDashoffset: 125.6
                                                }}
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-[#6C5DD3] font-medium mt-1">65% to Level 5</p>
                                </div>
                            </div>

                            {/* ZONE C: CENTER 2x2 GRID - The 4 Pillars */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {/* Critical Alerts - Orange with Gradient */}
                                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF4D00] rounded-2xl p-6 text-white shadow-lg">
                                    <h3 className="font-bold text-lg mb-4">🚨 Critical Alerts</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white/10 rounded-lg p-3">
                                            <p className="font-semibold">2 Overdue Tasks</p>
                                            <p className="text-sm opacity-90">Review quarterly report, Submit invoice</p>
                                        </div>
                                        <div className="bg-white/10 rounded-lg p-3">
                                            <p className="font-semibold">Over Budget</p>
                                            <p className="text-sm opacity-90">Dining: $150 / $100</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Health/Habits - Green with Gradient */}
                                <div className="bg-gradient-to-br from-[#00E676] to-[#00C853] rounded-2xl p-6 text-white shadow-lg">
                                    <h3 className="font-bold text-lg mb-4">💪 Health & Habits</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white/10 rounded-lg p-3">
                                            <div className="flex items-center justify-between mb-1">
                                                <p className="font-semibold">Hydration</p>
                                                <span className="text-sm">4/8</span>
                                            </div>
                                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                                <div className="h-full bg-white w-1/2"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 rounded-lg p-3">
                                            <p className="font-semibold">✓ Gym Completed</p>
                                            <p className="text-sm opacity-90">5-day streak</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Next Up - Black */}
                                <div className="bg-[#1A1A1A] rounded-2xl p-6 text-white shadow-lg">
                                    <h3 className="font-bold text-lg mb-4">⏱️ Next Up</h3>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <p className="font-semibold text-lg mb-1">Weekly Team Sync</p>
                                        <p className="text-sm opacity-90 mb-3">with Engineering Team</p>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#FF4D00] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                in 14 mins
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Inbox Status - White with Interactive Cues */}
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                                    <h3 className="font-bold text-lg mb-4 text-[#1A1D1F]">📥 Inbox Status</h3>
                                    <div className="space-y-3">
                                        <button className="w-full flex items-center justify-between p-3 bg-[#F5F6FA] hover:bg-gray-200 rounded-lg transition-colors group">
                                            <span className="text-[#1A1D1F] font-medium">Tasks</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#FF4D00] font-bold">3</span>
                                                <ChevronDown size={16} className="text-[#9A9FA5] group-hover:text-[#1A1D1F] transition-colors rotate-[-90deg]" />
                                            </div>
                                        </button>
                                        <button className="w-full flex items-center justify-between p-3 bg-[#F5F6FA] hover:bg-gray-200 rounded-lg transition-colors group">
                                            <span className="text-[#1A1D1F] font-medium">Unread Emails</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#6F767E] font-bold">12</span>
                                                <ChevronDown size={16} className="text-[#9A9FA5] group-hover:text-[#1A1D1F] transition-colors rotate-[-90deg]" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ZONE D: BOTTOM TRENDS */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                {/* Consistency Graph - Interactive with Tooltip */}
                                <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
                                    <h3 className="font-semibold text-[15px] text-[#1A1D1F] mb-4">Performance Score (30 Days)</h3>

                                    <div className="flex gap-2">
                                        {/* Y-axis Labels */}
                                        <div className="flex flex-col justify-between h-48 py-2 text-xs text-[#9A9FA5]">
                                            <span>100</span>
                                            <span>75</span>
                                            <span>50</span>
                                            <span>25</span>
                                            <span>0</span>
                                        </div>

                                        {/* SVG Smooth Area Chart with Interactive Tooltip */}
                                        <div className="flex-1 relative">
                                            <svg
                                                viewBox="0 0 600 150"
                                                className="w-full h-48"
                                                preserveAspectRatio="none"
                                                onMouseMove={(e) => {
                                                    const rect = e.currentTarget.getBoundingClientRect()
                                                    const x = ((e.clientX - rect.left) / rect.width) * 600

                                                    // Define data points matching the curve
                                                    const dataPoints = [
                                                        { x: 0, y: 75, day: 30, value: 75 },
                                                        { x: 100, y: 70, day: 25, value: 77 },
                                                        { x: 200, y: 65, day: 20, value: 80 },
                                                        { x: 300, y: 80, day: 15, value: 70 },
                                                        { x: 400, y: 55, day: 10, value: 85 },
                                                        { x: 500, y: 70, day: 5, value: 77 },
                                                        { x: 600, y: 60, day: 0, value: 82 }
                                                    ]

                                                    // Find nearest point
                                                    const nearest = dataPoints.reduce((prev, curr) =>
                                                        Math.abs(curr.x - x) < Math.abs(prev.x - x) ? curr : prev
                                                    )

                                                    setChartTooltip({
                                                        x: (nearest.x / 600) * rect.width,
                                                        y: ((150 - nearest.y) / 150) * rect.height,
                                                        value: nearest.value,
                                                        day: nearest.day
                                                    })
                                                }}
                                                onMouseLeave={() => setChartTooltip(null)}
                                            >
                                                <defs>
                                                    <linearGradient id="orangeAreaGradient" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                                                        <stop offset="100%" stopColor="#FF4D00" stopOpacity="0.05" />
                                                    </linearGradient>
                                                </defs>

                                                {/* Area Fill */}
                                                <path
                                                    d="M0,150 L0,75 Q50,60 100,70 T200,65 T300,80 T400,55 T500,70 T600,60 L600,150 Z"
                                                    fill="url(#orangeAreaGradient)"
                                                />

                                                {/* Smooth Line */}
                                                <path
                                                    d="M0,75 Q50,60 100,70 T200,65 T300,80 T400,55 T500,70 T600,60"
                                                    stroke="#FF4D00"
                                                    strokeWidth="3"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                />

                                                {/* Current Day Dot */}
                                                <circle
                                                    cx="600"
                                                    cy="60"
                                                    r="5"
                                                    fill="#FF4D00"
                                                    className="drop-shadow-lg"
                                                />
                                            </svg>

                                            {/* Interactive Tooltip */}
                                            {chartTooltip && (
                                                <div
                                                    className="absolute bg-[#1A1D1F] text-white px-3 py-2 rounded-lg text-xs font-medium shadow-xl pointer-events-none z-10 transition-all duration-75"
                                                    style={{
                                                        left: `${chartTooltip.x}px`,
                                                        top: `${chartTooltip.y - 45}px`,
                                                        transform: 'translateX(-50%)'
                                                    }}
                                                >
                                                    <div className="text-center">
                                                        <div className="font-bold text-[#FF9800]">{chartTooltip.value}%</div>
                                                        <div className="text-[10px] text-gray-300 mt-0.5">
                                                            {chartTooltip.day === 0 ? 'Today' : `${chartTooltip.day} days ago`}
                                                        </div>
                                                    </div>
                                                    {/* Tooltip Arrow */}
                                                    <div className="absolute left-1/2 bottom-[-4px] transform -translate-x-1/2 w-2 h-2 bg-[#1A1D1F] rotate-45"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* X-axis hint */}
                                    <div className="flex justify-between mt-2 text-xs text-[#9A9FA5]">
                                        <span>30 days ago</span>
                                        <span>Today</span>
                                    </div>
                                </div>

                                {/* Launchpad - Enhanced with Icon Circles */}
                                <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                                    <h3 className="font-semibold text-[15px] text-[#1A1D1F] mb-4">Launchpad</h3>
                                    <div className="space-y-2">
                                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F6FA] transition-all text-left group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-colors">
                                                    <Wallet className="h-4 w-4 text-[#FF4D00]" />
                                                </div>
                                                <span className="text-sm text-[#1A1D1F] font-medium">Log Expense</span>
                                            </div>
                                            <kbd className="px-2 py-1 text-[10px] font-semibold text-[#9A9FA5] bg-[#F5F6FA] rounded border border-gray-200 group-hover:bg-gray-200 group-hover:text-[#1A1D1F] group-hover:border-gray-300 transition-all">E</kbd>
                                        </button>
                                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F6FA] transition-all text-left group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-colors">
                                                    <BookOpen className="h-4 w-4 text-[#FF4D00]" />
                                                </div>
                                                <span className="text-sm text-[#1A1D1F] font-medium">Journal Entry</span>
                                            </div>
                                            <kbd className="px-2 py-1 text-[10px] font-semibold text-[#9A9FA5] bg-[#F5F6FA] rounded border border-gray-200 group-hover:bg-gray-200 group-hover:text-[#1A1D1F] group-hover:border-gray-300 transition-all">J</kbd>
                                        </button>
                                        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F5F6FA] transition-all text-left group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center group-hover:bg-[#FF4D00]/20 transition-colors">
                                                    <Sparkles className="h-4 w-4 text-[#FF4D00]" />
                                                </div>
                                                <span className="text-sm text-[#1A1D1F] font-medium">Quick Capture</span>
                                            </div>
                                            <kbd className="px-2 py-1 text-[10px] font-semibold text-[#9A9FA5] bg-[#F5F6FA] rounded border border-gray-200 group-hover:bg-gray-200 group-hover:text-[#1A1D1F] group-hover:border-gray-300 transition-all">C</kbd>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
