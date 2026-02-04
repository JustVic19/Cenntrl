'use client'

import { useState, useEffect } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    Sparkles, Zap, Smile, Target, Trophy, Lightbulb, Heart, Moon,
    TrendingUp, Plus, Check, Circle
} from "lucide-react"

export default function JournalPage() {
    const [greeting, setGreeting] = useState({ title: '', message: '' })

    // Time-based greeting
    useEffect(() => {
        const getGreeting = () => {
            const hour = new Date().getHours()
            if (hour >= 5 && hour < 12) {
                return { title: "Morning Prep", message: "Plan your day ahead, Victor." }
            }
            if (hour >= 12 && hour < 17) {
                return { title: "Afternoon Check-in", message: "How's your energy, Victor?" }
            }
            if (hour >= 17 && hour < 23) {
                return { title: "Evening Review", message: "Here is your day in review, Victor." }
            }
            return { title: "Late Night Reflection", message: "Time to rest, Victor." }
        }
        setGreeting(getGreeting())
    }, [])

    // Today's Journal Entry
    const todayEntry = {
        date: 'Feb 4, 2026',
        dayScore: 92,
        mood: {
            emoji: '⚡️',
            label: 'High Energy',
            pattern: 'Peak at 10 AM, Crash at 3 PM'
        },
        flowState: {
            hours: 4.5,
            goal: 4,
            percentage: 112
        },
        bigWin: 'Shipped the MVP Design',
        lesson: 'Don\'t schedule meetings during focus blocks.',
        gratitude: 'Coffee with Sarah.'
    }

    // Previous Entries
    const previousEntries = [
        {
            id: 1,
            date: 'Yesterday (Feb 3)',
            dayScore: 88,
            mood: '⚡️',
            preview: 'High energy, shipped design'
        },
        {
            id: 2,
            date: 'Monday (Feb 2)',
            dayScore: 94,
            mood: '🔥',
            preview: 'Perfect flow day'
        },
        {
            id: 3,
            date: 'Sunday Review',
            dayScore: null,
            mood: '🌅',
            preview: 'Weekly reflection'
        }
    ]

    // Tomorrow's Big 3
    const [tomorrowTasks, setTomorrowTasks] = useState([
        { id: 1, text: 'Finish CRM dashboard polish', done: false },
        { id: 2, text: 'Review Book Shelf feedback', done: false },
        { id: 3, text: '1-hour gym session', done: false }
    ])

    // Weekly Trend Data (7 days)
    const weeklyTrend = [
        { day: 'Mon', score: 82 },
        { day: 'Tue', score: 94 },
        { day: 'Wed', score: 88 },
        { day: 'Thu', score: 76 },
        { day: 'Fri', score: 92 },
        { day: 'Sat', score: 85 },
        { day: 'Sun', score: 90 }
    ]

    const toggleTask = (id: number) => {
        setTomorrowTasks(tasks =>
            tasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        )
    }

    // Simple sparkline path generator
    const generateSparklinePath = (data: typeof weeklyTrend) => {
        const width = 280
        const height = 80
        const maxScore = 100
        const padding = 10

        const points = data.map((point, i) => {
            const x = padding + (i * ((width - padding * 2) / (data.length - 1)))
            const y = height - padding - ((point.score / maxScore) * (height - padding * 2))
            return `${x},${y}`
        })

        return `M ${points.join(' L ')}`
    }

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8">
                <div className="max-w-[1600px] mx-auto">
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{greeting.title} 👋</h1>
                            <p className="text-gray-600">{greeting.message}</p>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-colors shadow-lg shadow-purple-200">
                            <Plus size={20} />
                            New Entry
                        </button>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[1fr_340px] gap-8">
                        {/* LEFT: Bento Grid + Previous Entries */}
                        <div>
                            {/* 6-Card Bento Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {/* Card 1: Day Score (Purple) */}
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles size={20} className="text-purple-600" />
                                        <span className="text-sm font-medium text-purple-700">Day Score</span>
                                    </div>
                                    <div className="text-5xl font-bold text-purple-700 mb-2">
                                        {todayEntry.dayScore}
                                        <span className="text-2xl text-purple-500">/100</span>
                                    </div>
                                    <p className="text-sm text-purple-600 font-medium">Productivity Pulse</p>
                                </div>

                                {/* Card 2: Mood Log (Yellow) */}
                                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Zap size={20} className="text-yellow-700" />
                                        <span className="text-sm font-medium text-yellow-800">Mood Log</span>
                                    </div>
                                    <div className="text-5xl mb-2">{todayEntry.mood.emoji}</div>
                                    <p className="text-sm text-yellow-800 font-medium">{todayEntry.mood.label}</p>
                                    <p className="text-xs text-yellow-700 mt-1">{todayEntry.mood.pattern}</p>
                                </div>

                                {/* Card 3: Flow State (Green) */}
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Target size={20} className="text-green-700" />
                                        <span className="text-sm font-medium text-green-700">Flow State</span>
                                    </div>
                                    <div className="text-5xl font-bold text-green-700 mb-2">
                                        {todayEntry.flowState.hours}
                                        <span className="text-2xl text-green-500">h</span>
                                    </div>
                                    <p className="text-sm text-green-600 font-medium">Deep Work Recorded</p>
                                    <p className="text-xs text-green-700 mt-1">{todayEntry.flowState.percentage}% of goal</p>
                                </div>

                                {/* Card 4: Big Win (Red) */}
                                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Trophy size={20} className="text-red-700" />
                                        <span className="text-sm font-medium text-red-700">Big Win</span>
                                    </div>
                                    <p className="text-lg font-bold text-red-700 leading-snug">
                                        {todayEntry.bigWin}
                                    </p>
                                </div>

                                {/* Card 5: The Lesson (Pink) */}
                                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb size={20} className="text-pink-700" />
                                        <span className="text-sm font-medium text-pink-700">The Lesson</span>
                                    </div>
                                    <p className="text-base font-medium text-pink-700 leading-snug">
                                        {todayEntry.lesson}
                                    </p>
                                </div>

                                {/* Card 6: Gratitude (Orange) */}
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Heart size={20} className="text-orange-700" />
                                        <span className="text-sm font-medium text-orange-700">Gratitude</span>
                                    </div>
                                    <p className="text-lg font-bold text-orange-700 leading-snug">
                                        {todayEntry.gratitude}
                                    </p>
                                </div>
                            </div>

                            {/* Previous Entries */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-gray-900">Previous Entries</h2>
                                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                                        View All →
                                    </button>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {previousEntries.map(entry => (
                                        <div
                                            key={entry.id}
                                            className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xl">{entry.mood}</span>
                                                {entry.dayScore && (
                                                    <span className="text-2xl font-bold text-gray-900">
                                                        {entry.dayScore}
                                                        <span className="text-sm text-gray-500">/100</span>
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm font-semibold text-gray-900 mb-1">{entry.date}</p>
                                            <p className="text-xs text-gray-600">{entry.preview}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="space-y-6">
                            {/* Tomorrow's Big 3 */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-2 mb-4">
                                    <Moon size={20} className="text-indigo-600" />
                                    <h3 className="font-bold text-gray-900">Tomorrow's Big 3</h3>
                                </div>

                                <div className="space-y-3 mb-4">
                                    {tomorrowTasks.map(task => (
                                        <div
                                            key={task.id}
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                            onClick={() => toggleTask(task.id)}
                                        >
                                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${task.done
                                                    ? 'bg-purple-600 border-purple-600'
                                                    : 'border-gray-300 hover:border-purple-400'
                                                }`}>
                                                {task.done && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className={`text-sm ${task.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                                                {task.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <Plus size={16} />
                                    Add Task
                                </button>
                            </div>

                            {/* Weekly Trend */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-2 mb-4">
                                    <TrendingUp size={20} className="text-purple-600" />
                                    <h3 className="font-bold text-gray-900">7-Day Pulse</h3>
                                </div>

                                {/* SVG Sparkline */}
                                <div className="mb-3">
                                    <svg width="280" height="80" className="w-full">
                                        {/* Grid lines */}
                                        <line x1="10" y1="70" x2="270" y2="70" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="10" y1="40" x2="270" y2="40" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="10" y1="10" x2="270" y2="10" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

                                        {/* Sparkline path */}
                                        <path
                                            d={generateSparklinePath(weeklyTrend)}
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        {/* Gradient definition */}
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#9333EA" />
                                                <stop offset="100%" stopColor="#EC4899" />
                                            </linearGradient>
                                        </defs>

                                        {/* Data points */}
                                        {weeklyTrend.map((point, i) => {
                                            const x = 10 + (i * ((280 - 20) / (weeklyTrend.length - 1)))
                                            const y = 80 - 10 - ((point.score / 100) * (80 - 20))
                                            const isToday = i === 4 // Friday
                                            return (
                                                <circle
                                                    key={i}
                                                    cx={x}
                                                    cy={y}
                                                    r={isToday ? 5 : 3}
                                                    fill={isToday ? '#9333EA' : '#EC4899'}
                                                    className="hover:r-6 transition-all cursor-pointer"
                                                />
                                            )
                                        })}
                                    </svg>
                                </div>

                                {/* Day labels */}
                                <div className="flex justify-between text-xs text-gray-500 px-2">
                                    {weeklyTrend.map((point, i) => (
                                        <span key={i} className={i === 4 ? 'font-bold text-purple-600' : ''}>
                                            {point.day}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Avg Score</span>
                                        <span className="font-bold text-gray-900">
                                            {Math.round(weeklyTrend.reduce((sum, p) => sum + p.score, 0) / weeklyTrend.length)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-2">
                                        <span className="text-gray-600">Best Day</span>
                                        <span className="font-bold text-green-600">
                                            {weeklyTrend.reduce((max, p) => p.score > max.score ? p : max).day} ({weeklyTrend.reduce((max, p) => p.score > max.score ? p : max).score})
                                        </span>
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
