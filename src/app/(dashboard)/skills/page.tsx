'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import { TrendingUp, Star, Zap, Heart, BookOpen, GraduationCap, Trophy, Target } from "lucide-react"

export default function SkillTreePage() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

    // Player data
    const playerLevel = 4
    const xpCurrent = 3750
    const xpToNextLevel = 5000
    const xpRemaining = xpToNextLevel - xpCurrent

    // Balance Wheel data (Radar Chart)
    const balanceData = [
        { pillar: "Body", current: 7, goal: 9, color: "#00C853" },
        { pillar: "Mind", current: 8, goal: 10, color: "#2196F3" },
        { pillar: "Wealth", current: 6, goal: 8, color: "#FF4D00" },
        { pillar: "Social", current: 5, goal: 7, color: "#9C27B0" },
        { pillar: "Craft", current: 4, goal: 6, color: "#00BCD4" }
    ]

    // Skills data
    const skills = [
        { name: "Spanish", level: 3, maxLevel: 10, category: "Mind" },
        { name: "Coding", level: 6, maxLevel: 10, category: "Wealth" },
        { name: "Cooking", level: 2, maxLevel: 10, category: "Craft" },
        { name: "Running", level: 5, maxLevel: 10, category: "Body" },
        { name: "Networking", level: 4, maxLevel: 10, category: "Social" },
        { name: "Meditation", level: 7, maxLevel: 10, category: "Mind" },
        { name: "Guitar", level: 3, maxLevel: 10, category: "Craft" }
    ]

    // Active quests
    const quests = [
        { title: "Atomic Habits", type: "Book", progress: 45, icon: "📖", status: "active" as const },
        { title: "React Advanced", type: "Course", progress: 10, icon: "🎓", status: "active" as const },
        { title: "Marathon Training", type: "Challenge", progress: 33, icon: "🏃‍♂️", status: "active" as const }
    ]

    // Radar chart calculation
    const cx = 200
    const cy = 200
    const maxRadius = 140

    const getRadarPoint = (index: number, value: number, max: number = 10) => {
        const angle = (index * 72 - 90) * (Math.PI / 180) // Pentagon: 360/5 = 72°
        const radius = (value / max) * maxRadius
        return {
            x: cx + radius * Math.cos(angle),
            y: cy + radius * Math.sin(angle)
        }
    }

    const currentPoints = balanceData.map((d, i) => getRadarPoint(i, d.current))
    const goalPoints = balanceData.map((d, i) => getRadarPoint(i, d.goal))

    const currentPath = currentPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
    const goalPath = goalPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] flex">
                {/* LEFT SIDEBAR: Character Stats */}
                <div className="w-72 bg-white border-r border-gray-200 p-6 space-y-6">
                    {/* Profile Card */}
                    <div className="text-center">
                        {/* Avatar with Progress Ring */}
                        <div className="relative w-24 h-24 mx-auto mb-4">
                            {/* Progress Ring */}
                            <svg className="absolute inset-0 transform -rotate-90" width="96" height="96">
                                <circle cx="48" cy="48" r="44" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="44"
                                    stroke="#9C27B0"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="276.46"
                                    strokeDashoffset={276.46 * (1 - (xpCurrent / xpToNextLevel))}
                                    strokeLinecap="round"
                                />
                            </svg>
                            {/* Avatar */}
                            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <span className="text-3xl">👤</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#1A1D1F]">Level {playerLevel}</h2>
                        <div className="flex items-center justify-center gap-1 mt-1">
                            <Trophy className="w-3 h-3 text-yellow-500" />
                            <p className="text-sm text-gray-500">Strategist</p>
                        </div>
                    </div>

                    {/* Attribute Modifiers */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Attributes</h3>

                        <div className="bg-[#E3F2FD] rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">Wisdom</span>
                            </div>
                            <span className="text-lg font-bold text-blue-600">+12</span>
                        </div>

                        <div className="bg-[#FFEBEE] rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-red-600" />
                                <span className="text-sm font-medium text-gray-700">Strength</span>
                            </div>
                            <span className="text-lg font-bold text-red-600">+8</span>
                        </div>

                        <div className="bg-[#F3E5F5] rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Heart className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-gray-700">Charisma</span>
                            </div>
                            <span className="text-lg font-bold text-purple-600">+5</span>
                        </div>
                    </div>

                    {/* XP Velocity */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">XP Velocity</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            {/* Enhanced Bar Chart with Grid */}
                            <div className="relative h-24 mb-3">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="border-t border-gray-200"></div>
                                    <div className="border-t border-gray-200"></div>
                                    <div className="border-t border-gray-200"></div>
                                </div>

                                {/* Bars */}
                                <div className="relative h-full flex items-end gap-3">
                                    {/* Last Week (Single Bar) */}
                                    <div className="flex-1 flex flex-col justify-end">
                                        <div className="bg-gray-300 rounded-t h-16"></div>
                                        <p className="text-[10px] text-gray-500 text-center mt-1.5">Last</p>
                                    </div>

                                    {/* This Week (Daily Stack) */}
                                    <div className="flex-1 flex flex-col justify-end">
                                        <div className="flex items-end gap-0.5 h-20">
                                            {[40, 60, 55, 70, 50, 75, 80].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-[#9C27B0] rounded-t"
                                                    style={{ height: `${height}%` }}
                                                ></div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-gray-700 font-semibold text-center mt-1.5">This</p>
                                    </div>
                                </div>
                            </div>

                            {/* Growth Text */}
                            <p className="text-sm text-center font-bold text-[#00C853]">+350 XP this week</p>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-6 overflow-auto">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                            {/* CENTER COLUMN */}
                            <div className="space-y-6">
                                {/* Level Progression Bar */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Current</p>
                                            <p className="text-xl font-bold text-[#1A1D1F]">Level {playerLevel}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Next</p>
                                            <p className="text-xl font-bold text-[#9C27B0]">Level {playerLevel + 1}</p>
                                        </div>
                                    </div>

                                    {/* Segmented Progress Bar */}
                                    <div className="relative">
                                        <div className="w-full bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-gradient-to-r from-[#9C27B0] to-[#7B1FA2] h-4 rounded-full transition-all"
                                                style={{ width: `${(xpCurrent / xpToNextLevel) * 100}%` }}
                                            ></div>
                                        </div>
                                        {/* Segment markers */}
                                        <div className="absolute inset-0 flex">
                                            {[...Array(10)].map((_, i) => (
                                                <div key={i} className="flex-1 border-r border-gray-300 last:border-r-0"></div>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-sm text-center text-gray-600 mt-3">
                                        {xpRemaining.toLocaleString()} XP remaining to level up
                                    </p>
                                </div>

                                {/* Balance Wheel (Radar Chart) */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6 text-center">
                                        Life Balance Wheel
                                    </h3>

                                    <div className="flex items-center justify-center">
                                        <svg width="400" height="400" viewBox="0 0 400 400">
                                            {/* Grid circles */}
                                            {[2, 4, 6, 8, 10].map((level) => (
                                                <circle
                                                    key={level}
                                                    cx={cx}
                                                    cy={cy}
                                                    r={(level / 10) * maxRadius}
                                                    fill="none"
                                                    stroke="#E5E7EB"
                                                    strokeWidth="1"
                                                />
                                            ))}

                                            {/* Axis lines */}
                                            {balanceData.map((_, i) => {
                                                const point = getRadarPoint(i, 10)
                                                return (
                                                    <line
                                                        key={i}
                                                        x1={cx}
                                                        y1={cy}
                                                        x2={point.x}
                                                        y2={point.y}
                                                        stroke="#E5E7EB"
                                                        strokeWidth="1"
                                                    />
                                                )
                                            })}

                                            {/* Goal levels (dotted line) */}
                                            <path
                                                d={goalPath}
                                                fill="none"
                                                stroke="#9C27B0"
                                                strokeWidth="2"
                                                strokeDasharray="5,5"
                                                opacity="0.5"
                                            />

                                            {/* Current levels (filled area) */}
                                            <path
                                                d={currentPath}
                                                fill="#9C27B0"
                                                fillOpacity="0.2"
                                                stroke="#9C27B0"
                                                strokeWidth="3"
                                            />

                                            {/* Axis labels */}
                                            {balanceData.map((data, i) => {
                                                const labelPoint = getRadarPoint(i, 11.5)
                                                return (
                                                    <g key={data.pillar}>
                                                        <text
                                                            x={labelPoint.x}
                                                            y={labelPoint.y}
                                                            textAnchor="middle"
                                                            className="text-sm font-semibold fill-gray-700"
                                                        >
                                                            {data.pillar}
                                                        </text>
                                                        <text
                                                            x={labelPoint.x}
                                                            y={labelPoint.y + 15}
                                                            textAnchor="middle"
                                                            className="text-xs fill-gray-500"
                                                        >
                                                            {data.current}/{data.goal}
                                                        </text>
                                                    </g>
                                                )
                                            })}
                                        </svg>
                                    </div>

                                    <div className="flex items-center justify-center gap-6 mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#9C27B0]"></div>
                                            <span className="text-xs text-gray-600">Current</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-0.5 border-t-2 border-dashed border-[#9C27B0]"></div>
                                            <span className="text-xs text-gray-600">Goal</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Quests */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Active Quests</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {quests.map((quest) => (
                                            <div key={quest.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                                <div className="flex items-start justify-between mb-3">
                                                    <span className="text-3xl">{quest.icon}</span>
                                                    <span className="px-2 py-1 bg-[#FF4D00]/10 text-[#FF4D00] text-[10px] font-semibold rounded-full">
                                                        {quest.type}
                                                    </span>
                                                </div>
                                                <h4 className="font-semibold text-[#1A1D1F] mb-3">{quest.title}</h4>
                                                <div>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs text-gray-500">Progress</span>
                                                        <span className="text-xs font-semibold text-[#1A1D1F]">{quest.progress}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-[#FF4D00] h-2 rounded-full transition-all"
                                                            style={{ width: `${quest.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Skill Log */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Skill Log</h3>

                                <div className="space-y-3">
                                    {skills.map((skill) => (
                                        <button
                                            key={skill.name}
                                            onClick={() => setSelectedSkill(skill.name)}
                                            className={`w-full text-left p-3 rounded-lg transition-colors ${selectedSkill === skill.name
                                                ? 'bg-[#9C27B0]/10 border-2 border-[#9C27B0]'
                                                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-[#1A1D1F]">{skill.name}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-[#9C27B0]">Lvl {skill.level}</span>
                                                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-[#9C27B0] h-2 rounded-full transition-all"
                                                    style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                                                ></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
