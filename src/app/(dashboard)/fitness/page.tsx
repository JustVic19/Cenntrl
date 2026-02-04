'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    Activity, Heart, TrendingUp, Target, Droplet, Moon, Flame,
    Plus, Minus, ChevronRight
} from "lucide-react"

export default function FitnessPage() {
    // Nutrition Data
    const nutrition = {
        caloriesEaten: 1800,
        caloriesGoal: 3000,
        caloriesLeft: 1200,
        macros: {
            carbs: { eaten: 180, goal: 225, left: 45, unit: 'g' },
            protein: { eaten: 88, goal: 150, left: 62, unit: 'g' },
            fat: { eaten: 60, goal: 75, left: 15, unit: 'g' }
        }
    }

    // Weekly Strain Data
    const weeklyStrain = [
        { day: 'Mon', strain: 3800 },
        { day: 'Tue', strain: 5200 },
        { day: 'Wed', strain: 2100 },
        { day: 'Thu', strain: 4500 },
        { day: 'Fri', strain: 3100 },
        { day: 'Sat', strain: 5050 }, // Today
        { day: 'Sun', strain: 0 }
    ]
    const targetStrain = 4000
    const todayStrain = 5050

    // Bio-Readiness Data
    const bioReadiness = {
        score: 85,
        status: 'Prime to Train',
        statusColor: 'text-green-400',
        hrv: { value: 65, trend: '+5', unit: 'ms', trendUp: true },
        rhr: { value: 52, trend: '-2', unit: 'bpm', trendUp: false },
        water: {
            current: 1000,
            goal: 3500,
            lastDrink: '8:26 am'
        }
    }

    const [waterAmount, setWaterAmount] = useState(bioReadiness.water.current)

    // Monthly Calendar Data (February 2026 - Feb 1 is Sunday)
    const monthCalendar = [
        // Week 1 (Mon-Sat empty, Sun Feb 1)
        { date: null, hasWorkout: false },
        { date: null, hasWorkout: false },
        { date: null, hasWorkout: false },
        { date: null, hasWorkout: false },
        { date: null, hasWorkout: false },
        { date: null, hasWorkout: false },
        { date: 1, hasWorkout: false },
        // Week 2 (Mon Feb 2 - Sun Feb 8)
        { date: 2, hasWorkout: true },
        { date: 3, hasWorkout: true },
        { date: 4, hasWorkout: false }, // Today
        { date: 5, hasWorkout: true },
        { date: 6, hasWorkout: true },
        { date: 7, hasWorkout: true },
        { date: 8, hasWorkout: true },
        // Week 3 (Mon Feb 9 - Sun Feb 15)
        { date: 9, hasWorkout: true },
        { date: 10, hasWorkout: true },
        { date: 11, hasWorkout: true },
        { date: 12, hasWorkout: true },
        { date: 13, hasWorkout: false },
        { date: 14, hasWorkout: true },
        { date: 15, hasWorkout: false },
        // Week 4 (Mon Feb 16 - Sun Feb 22)
        { date: 16, hasWorkout: true },
        { date: 17, hasWorkout: true },
        { date: 18, hasWorkout: false },
        { date: 19, hasWorkout: true },
        { date: 20, hasWorkout: false },
        { date: 21, hasWorkout: true },
        { date: 22, hasWorkout: false },
        // Week 5 (Mon Feb 23 - Sun Feb 29 - leap year!)
        { date: 23, hasWorkout: true },
        { date: 24, hasWorkout: true },
        { date: 25, hasWorkout: false },
        { date: 26, hasWorkout: true },
        { date: 27, hasWorkout: false },
        { date: 28, hasWorkout: true },
        { date: 29, hasWorkout: false }
    ]

    const currentDay = 4 // Feb 4 (today)
    const workoutsThisMonth = monthCalendar.filter(day => day.hasWorkout).length


    const sleep = {
        duration: '7h 45m',
        efficiency: 92,
        bedtime: '23:15',
        wakeup: '07:00',
        stages: {
            deep: '2h 10m',
            rem: '2h 05m',
            light: '3h 20m',
            awake: '10m'
        }
    }

    // Vitality Skills (RPG Stats)
    const vitalityStats = [
        {
            id: 1,
            name: 'Strength',
            icon: '🏋️‍♂️',
            level: 8,
            progress: 75,
            metric: 'Bench Press PR',
            value: '225 lbs'
        },
        {
            id: 2,
            name: 'Endurance',
            icon: '🏃‍♂️',
            level: 5,
            progress: 60,
            metric: '5k Time',
            value: '24:30'
        },
        {
            id: 3,
            name: 'Flexibility',
            icon: '🧘‍♂️',
            level: 3,
            progress: 40,
            metric: 'Yoga Streak',
            value: '7 days'
        }
    ]

    // Helper Functions
    const getHeatmapColor = (minutes: number) => {
        if (minutes === 0) return 'bg-gray-700'
        if (minutes < 20) return 'bg-green-900'
        if (minutes < 40) return 'bg-green-600'
        return 'bg-green-400'
    }

    const caloriePercentage = (nutrition.caloriesEaten / nutrition.caloriesGoal) * 100
    const waterPercentage = (waterAmount / bioReadiness.water.goal) * 100

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-gray-900 p-8">
                <div className="max-w-[1600px] mx-auto">
                    {/* HEADER */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Vitality HUD</h1>
                        <p className="text-gray-400">Your body as a command center</p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[1fr_320px] gap-6">
                        {/* LEFT COLUMN */}
                        <div className="space-y-6">
                            {/* TOP ROW: Macro Splits + Weekly Strain + Bio-Readiness */}
                            <div className="grid grid-cols-3 gap-6">
                                {/* MACRO SPLITS RING */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity size={20} className="text-green-400" />
                                        <h3 className="font-bold text-white">Fuel Command</h3>
                                    </div>

                                    {/* Calorie Ring */}
                                    <div className="flex flex-col items-center mb-6">
                                        <div className="relative w-40 h-40">
                                            <svg className="w-full h-full transform -rotate-90">
                                                {/* Background ring */}
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="#374151"
                                                    strokeWidth="12"
                                                    fill="none"
                                                />
                                                {/* Progress ring */}
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="#14B8A6"
                                                    strokeWidth="12"
                                                    fill="none"
                                                    strokeDasharray={`${caloriePercentage * 4.4} 440`}
                                                    strokeLinecap="round"
                                                    className="transition-all duration-1000"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <p className="text-4xl font-bold text-white font-mono">{nutrition.caloriesLeft}</p>
                                                <p className="text-xs text-gray-400">kcal left</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Macro Data */}
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Carbs</p>
                                            <p className="text-lg font-bold text-green-400 font-mono">{nutrition.macros.carbs.left}g</p>
                                            <p className="text-xs text-gray-500">left</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Protein</p>
                                            <p className="text-lg font-bold text-green-400 font-mono">{nutrition.macros.protein.left}g</p>
                                            <p className="text-xs text-gray-500">left</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Fat</p>
                                            <p className="text-lg font-bold text-green-400 font-mono">{nutrition.macros.fat.left}g</p>
                                            <p className="text-xs text-gray-500">left</p>
                                        </div>
                                    </div>
                                </div>

                                {/* WEEKLY STRAIN CHART */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp size={20} className="text-green-400" />
                                        <h3 className="font-bold text-white">Weekly Strain</h3>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-3xl font-bold text-white font-mono">{todayStrain.toLocaleString()}</p>
                                        <p className="text-xs text-gray-400">You've pushed harder than usual today</p>
                                    </div>

                                    {/* Bar Chart */}
                                    <div className="relative h-32 flex items-end justify-between gap-2 mb-2">
                                        {/* Target line */}
                                        <div className="absolute inset-x-0 border-t-2 border-dashed border-yellow-500/50" style={{ bottom: `${(targetStrain / 6000) * 100}%` }}>
                                            <span className="absolute -top-5 right-0 text-xs text-yellow-500 font-mono">{targetStrain}</span>
                                        </div>

                                        {weeklyStrain.map((day, i) => {
                                            const height = (day.strain / 6000) * 100
                                            const isToday = i === 5
                                            return (
                                                <div key={i} className="flex-1 flex flex-col items-center">
                                                    <div
                                                        className={`w-full rounded-t transition-all ${isToday ? 'bg-green-400' : 'bg-green-600'
                                                            }`}
                                                        style={{ height: `${height}%` }}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Day labels */}
                                    <div className="flex justify-between text-xs text-gray-400">
                                        {weeklyStrain.map((day, i) => (
                                            <span key={i} className={i === 5 ? 'text-green-400 font-bold' : ''}>
                                                {day.day}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* BIO-READINESS STACK */}
                                <div className="space-y-3">
                                    {/* Readiness Score */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Heart size={16} className="text-green-400" />
                                            <h4 className="text-xs text-gray-400 uppercase tracking-wide">Readiness</h4>
                                        </div>
                                        <p className="text-4xl font-bold text-white mb-1">{bioReadiness.score}%</p>
                                        <p className={`text-sm font-medium ${bioReadiness.statusColor}`}>{bioReadiness.status}</p>
                                    </div>

                                    {/* Biometrics */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-xs text-gray-400 mb-1">HRV</p>
                                                <p className="text-2xl font-bold text-green-400 font-mono">
                                                    {bioReadiness.hrv.value}
                                                    <span className="text-xs ml-1">{bioReadiness.hrv.unit}</span>
                                                </p>
                                                <p className="text-xs text-green-400">↑ {bioReadiness.hrv.trend}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 mb-1">Resting HR</p>
                                                <p className="text-2xl font-bold text-green-400 font-mono">
                                                    {bioReadiness.rhr.value}
                                                    <span className="text-xs ml-1">{bioReadiness.rhr.unit}</span>
                                                </p>
                                                <p className="text-xs text-green-400">↓ {bioReadiness.rhr.trend}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Water Tracker */}
                                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Droplet size={16} className="text-blue-400" />
                                                <div>
                                                    <p className="text-xs text-gray-400">Water</p>
                                                    <p className="text-sm font-mono text-white">{waterAmount}ml <span className="text-gray-500">/ {bioReadiness.water.goal}ml</span></p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setWaterAmount(Math.max(0, waterAmount - 250))}
                                                    className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                                >
                                                    <Minus size={14} className="text-gray-300" />
                                                </button>
                                                <button
                                                    onClick={() => setWaterAmount(Math.min(bioReadiness.water.goal, waterAmount + 250))}
                                                    className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                                >
                                                    <Plus size={14} className="text-gray-300" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Water progress bar */}
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-400 transition-all duration-300"
                                                style={{ width: `${waterPercentage}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">Last: {bioReadiness.water.lastDrink}</p>
                                    </div>
                                </div>
                            </div>

                            {/* WORKOUT CONSISTENCY - MONTHLY CALENDAR */}
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Flame size={20} className="text-orange-400" />
                                            <h3 className="font-bold text-white">Workout Consistency</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            {workoutsThisMonth} workouts this month
                                        </p>
                                    </div>
                                </div>

                                {/* Monthly Calendar Grid */}
                                <div>
                                    {/* Day headers - aligned with Weekly Strain chart */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                                            <div key={i} className="text-xs text-gray-400 text-center font-medium">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid - 5 rows × 7 columns */}
                                    <div className="grid grid-cols-7 gap-1">
                                        {monthCalendar.map((day, idx) => {
                                            const isToday = day.date === currentDay
                                            const isWorkout = day.hasWorkout
                                            const isEmpty = day.date === null

                                            if (isEmpty) {
                                                return <div key={idx} className="h-10" />
                                            }

                                            return (
                                                <div
                                                    key={idx}
                                                    className="h-10 flex items-center justify-center relative"
                                                >
                                                    {/* Workout day: green circle centered behind number */}
                                                    {isWorkout && (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-8 h-8 bg-green-500 rounded-full" />
                                                        </div>
                                                    )}

                                                    {/* Current day: green ring centered */}
                                                    {isToday && (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-8 h-8 border-2 border-green-400 rounded-full" />
                                                        </div>
                                                    )}

                                                    {/* Date number on top */}
                                                    <span
                                                        className={`relative z-10 text-sm font-medium ${isWorkout ? 'text-white' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {day.date}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* RECOVERY LAB */}
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center gap-2 mb-4">
                                    <Moon size={20} className="text-purple-400" />
                                    <h3 className="font-bold text-white">Recovery Lab</h3>
                                </div>

                                <div className="mb-4">
                                    <p className="text-3xl font-bold text-white">{sleep.duration}</p>
                                    <p className="text-sm text-gray-400">Sleep efficiency: {sleep.efficiency}%</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {sleep.bedtime} → {sleep.wakeup}
                                    </p>
                                </div>

                                {/* Sleep Wave Graph - Enhanced */}
                                <div className="mb-4 bg-gray-900 rounded-lg p-4">
                                    <svg width="100%" height="160" className="w-full" viewBox="0 0 600 160">
                                        {/* Sleep stage background zones */}
                                        <defs>
                                            <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#60A5FA" />
                                                <stop offset="25%" stopColor="#1E40AF" />
                                                <stop offset="50%" stopColor="#60A5FA" />
                                                <stop offset="75%" stopColor="#1E40AF" />
                                                <stop offset="100%" stopColor="#60A5FA" />
                                            </linearGradient>
                                        </defs>

                                        {/* Deep sleep zones (darker blue bands) */}
                                        <rect x="80" y="0" width="100" height="160" fill="#1E3A8A" opacity="0.3" />
                                        <rect x="350" y="0" width="120" height="160" fill="#1E3A8A" opacity="0.3" />

                                        {/* Background grid */}
                                        <line x1="0" y1="40" x2="600" y2="40" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="80" x2="600" y2="80" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="120" x2="600" y2="120" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />

                                        {/* Sleep wave path - more dramatic amplitude */}
                                        <path
                                            d="M 0 120 Q 40 130, 80 100 Q 120 60, 180 80 Q 220 110, 260 120 Q 300 130, 350 70 Q 400 40, 470 90 Q 520 110, 600 120"
                                            fill="none"
                                            stroke="url(#sleepGradient)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />

                                        {/* Time labels */}
                                        <text x="0" y="155" fill="#9CA3AF" fontSize="10">00:00</text>
                                        <text x="200" y="155" fill="#9CA3AF" fontSize="10">03:00</text>
                                        <text x="400" y="155" fill="#9CA3AF" fontSize="10">06:00</text>
                                    </svg>
                                </div>

                                {/* Sleep Stages */}
                                <div className="grid grid-cols-4 gap-3 text-center">
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Deep</p>
                                        <p className="text-sm font-bold text-blue-400">{sleep.stages.deep}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">REM</p>
                                        <p className="text-sm font-bold text-blue-300">{sleep.stages.rem}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Light</p>
                                        <p className="text-sm font-bold text-gray-400">{sleep.stages.light}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Awake</p>
                                        <p className="text-sm font-bold text-gray-500">{sleep.stages.awake}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR: Vitality Skills RPG */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-6">
                                <Target size={20} className="text-green-400" />
                                <div>
                                    <h3 className="font-bold text-white">Vitality Skills</h3>
                                    <p className="text-xs text-gray-400">Level up your physical stats</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {vitalityStats.map(stat => (
                                    <div key={stat.id} className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-green-400 transition-colors">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{stat.icon}</span>
                                                <div>
                                                    <p className="font-bold text-white">{stat.name}</p>
                                                    <p className="text-xs text-gray-400">{stat.metric}</p>
                                                    <p className="text-sm text-green-400 font-mono">{stat.value}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-green-400">Lv {stat.level}</p>
                                            </div>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
                                                style={{ width: `${stat.progress}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 text-right">{stat.progress}% to Lv {stat.level + 1}</p>
                                    </div>
                                ))}
                            </div>

                            {/* View All Stats */}
                            <button className="w-full mt-6 border border-gray-700 text-gray-400 py-3 rounded-lg hover:border-green-400 hover:text-green-400 transition-colors flex items-center justify-center gap-2">
                                View All Stats
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
