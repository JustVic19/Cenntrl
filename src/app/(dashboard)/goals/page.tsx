'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import { Calendar, TrendingUp, Target, Zap, BookOpen, Rocket, ArrowUp, ArrowRight, Dumbbell, Brain, Wine } from "lucide-react"

export default function GoalRoomPage() {
    const [selectedTimeframe, setSelectedTimeframe] = useState<"2026" | "Q1" | "Q2" | "Q3" | "Q4">("2026")

    // Calculate year progress
    const today = new Date()
    const yearStart = new Date(2026, 0, 1)
    const yearEnd = new Date(2026, 11, 31)
    const daysPassed = Math.floor((today.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24))
    const totalDays = 365
    const yearProgress = Math.round((daysPassed / totalDays) * 100)

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] flex">
                {/* LEFT SIDEBAR: Timeframe Toggles */}
                <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-4">
                    <button
                        onClick={() => setSelectedTimeframe("2026")}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selectedTimeframe === "2026"
                            ? 'bg-[#FF4D00] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        <Calendar size={20} />
                    </button>

                    {["Q1", "Q2", "Q3", "Q4"].map((quarter) => (
                        <button
                            key={quarter}
                            onClick={() => setSelectedTimeframe(quarter as any)}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-colors ${selectedTimeframe === quarter
                                ? 'bg-[#FF4D00] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {quarter}
                        </button>
                    ))}
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-6 overflow-auto">
                    <div className="max-w-[1600px] mx-auto">
                        {/* TOP SECTION: Grid + Right Panel */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mb-6">
                            {/* LEFT COLUMN */}
                            <div className="space-y-6">
                                {/* TOP GRID: North Star KPIs (2x2) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Card 1: Year Progress */}
                                    <div className="bg-[#F5F6FA] rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <TrendingUp className="w-6 h-6 text-gray-500 mb-4" />
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-[#1A1D1F] mb-2">{yearProgress}%</div>
                                            <p className="text-sm text-gray-500">of 2026 Complete</p>
                                            <p className="text-xs text-gray-400 mt-2">Days elapsed: {daysPassed}/{totalDays}</p>
                                        </div>
                                    </div>

                                    {/* Card 2: OKRs Status */}
                                    <div className="bg-[#EDE7F6] rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <Target className="w-6 h-6 text-purple-600 mb-4" />
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#1A1D1F] mb-2">3 / 1</div>
                                            <p className="text-sm text-gray-500">On Track / At Risk</p>
                                            <div className="flex items-center justify-center gap-2 mt-3">
                                                <div className="w-3 h-3 rounded-full bg-[#00C853]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#00C853]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#00C853]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#FF4D00]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3: Habit Consistency */}
                                    <div className="bg-[#FFF3E0] rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <Zap className="w-6 h-6 text-orange-600 mb-4" />
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-[#1A1D1F] mb-2">88%</div>
                                            <p className="text-sm text-gray-500">Success Rate</p>
                                            <div className="flex items-end justify-center gap-1 mt-4 h-8">
                                                {[60, 80, 100, 75, 90, 85, 95].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-2 bg-[#FF4D00] rounded-t"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: Books Read */}
                                    <div className="bg-[#E3F2FD] rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <BookOpen className="w-6 h-6 text-blue-600 mb-4" />
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#1A1D1F] mb-2">4 / 24</div>
                                            <p className="text-sm text-gray-500">Books Read</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                                                <div className="bg-[#2196F3] h-2 rounded-full" style={{ width: '17%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MIDDLE ROW: Habit Streaks (3 White Cards with Colored Numbers) */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Gym Streak */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <Dumbbell className="w-5 h-5 text-gray-400" />
                                            <ArrowUp className="w-4 h-4 text-[#00C853]" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-[#00C853] mb-1">5</div>
                                            <p className="text-xs text-gray-500">Gym Streak</p>
                                        </div>
                                    </div>

                                    {/* Meditation */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <Brain className="w-5 h-5 text-gray-400" />
                                            <ArrowRight className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-[#2196F3] mb-1">12</div>
                                            <p className="text-xs text-gray-500">Meditation</p>
                                        </div>
                                    </div>

                                    {/* Zero Alcohol */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <Wine className="w-5 h-5 text-gray-400" />
                                            <ArrowUp className="w-4 h-4 text-[#00C853]" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-[#9C27B0] mb-1">28</div>
                                            <p className="text-xs text-gray-500">Zero Alcohol</p>
                                        </div>
                                    </div>
                                </div>

                                {/* BOTTOM LEFT: Active Project Focus */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                                            <Rocket className="w-6 h-6 text-[#FF4D00]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Current Sprint Focus</h3>
                                            <p className="text-lg font-bold text-[#1A1D1F]">Launch MVP</p>
                                        </div>
                                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                            View Board
                                        </button>
                                    </div>

                                    {/* Progress Bar with Gray Track */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-600">Tasks Completed</span>
                                            <span className="text-sm font-semibold text-[#1A1D1F]">34 / 50</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-[#FF4D00] h-3 rounded-full transition-all" style={{ width: '68%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Consistency Engine */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6">Consistency Engine</h3>

                                {/* Weekly Calendar Strip */}
                                <div className="flex justify-between mb-6">
                                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                                        <div key={day} className="text-center">
                                            <p className="text-xs text-gray-400 mb-1">{day}</p>
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold ${i === 3
                                                ? 'bg-[#FF4D00] text-white'
                                                : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {18 + i}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Line Chart Placeholder */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-500 mb-3">Focus Hours vs. Output</h4>
                                    <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                                        <div className="flex-1 h-full flex items-end justify-between">
                                            {[60, 75, 65, 80, 70, 85, 90].map((height, i) => (
                                                <div key={i} className="flex flex-col items-center justify-end h-full">
                                                    <div
                                                        className="w-1 bg-[#2196F3] rounded-t"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-400">-5.6 Hours</span>
                                        <span className="text-xs text-gray-600 font-semibold">+4.4 Output</span>
                                    </div>
                                </div>

                                {/* Bar Chart: Deep Work Volume (with grid lines) */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-500 mb-3">Deep Work Volume</h4>
                                    <div className="relative h-32 bg-gray-50 rounded-lg p-4">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                                            <div className="border-t border-gray-200"></div>
                                            <div className="border-t border-gray-200"></div>
                                            <div className="border-t border-gray-200"></div>
                                            <div className="border-t border-gray-200"></div>
                                        </div>

                                        {/* Y-Axis Labels */}
                                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-400 py-4">
                                            <span>8h</span>
                                            <span>6h</span>
                                            <span>4h</span>
                                            <span>2h</span>
                                            <span>0h</span>
                                        </div>

                                        {/* Bars */}
                                        <div className="relative h-full flex items-end justify-between gap-2 pl-6">
                                            {[70, 40, 80, 60, 85, 50, 75].map((height, i) => (
                                                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                                                    <div
                                                        className={`w-full rounded-t transition-all ${i === 3 ? 'bg-[#FF4D00]' : 'bg-[#2196F3]'
                                                            }`}
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* X-Axis Labels */}
                                    <div className="flex items-center justify-between mt-2 pl-6">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                                            <p key={i} className="text-[10px] text-gray-400 flex-1 text-center">{day}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Mini-Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Sleep Avg */}
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 relative">
                                            <svg className="transform -rotate-90" width="48" height="48">
                                                <circle cx="24" cy="24" r="20" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                                                <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="20"
                                                    stroke="#2196F3"
                                                    strokeWidth="4"
                                                    fill="none"
                                                    strokeDasharray="125.6"
                                                    strokeDashoffset="30"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-lg font-bold text-[#1A1D1F]">7h 12m</p>
                                        <p className="text-xs text-gray-500">Sleep Avg</p>
                                    </div>

                                    {/* Mood Score */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-xs text-gray-500 mb-3">Mood Score</p>
                                        <div className="flex items-end gap-1 h-8">
                                            {[4, 3, 5, 4, 5].map((score, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-[#00C853] rounded-t"
                                                    style={{ height: `${score * 20}%` }}
                                                ></div>
                                            ))}
                                        </div>
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
