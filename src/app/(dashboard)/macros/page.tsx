'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    Activity, TrendingUp, Droplet, Plus, Minus, UtensilsCrossed,
    Weight, Pill, Apple, Wine, Leaf
} from "lucide-react"

export default function MacrosPage() {
    // Nutrition Data
    const nutrition = {
        caloriesEaten: 1800,
        caloriesGoal: 3000,
        caloriesLeft: 1200,
        macros: {
            protein: { eaten: 88, goal: 150, left: 62, unit: 'g', color: 'text-green-400' },
            carbs: { eaten: 180, goal: 225, left: 45, unit: 'g', color: 'text-blue-400' },
            fat: { eaten: 60, goal: 75, left: 15, unit: 'g', color: 'text-purple-400' }
        }
    }

    // Protein Consistency (7 days)
    const proteinData = [
        { day: 'Mon', amount: 165, target: 180 },
        { day: 'Tue', amount: 142, target: 180 },
        { day: 'Wed', amount: 188, target: 180 },
        { day: 'Thu', amount: 155, target: 180 },
        { day: 'Fri', amount: 192, target: 180 },
        { day: 'Sat', amount: 178, target: 180 },
        { day: 'Sun', amount: 88, target: 180 } // Today (partial)
    ]

    // Hydration
    const [waterAmount, setWaterAmount] = useState(1000)
    const waterGoal = 3500

    // Meals
    const meals = [
        { icon: '🍳', name: 'Breakfast', calories: 600, description: 'Oats & Eggs', logged: true },
        { icon: '🥗', name: 'Lunch', calories: 850, description: 'Chicken Salad', logged: true },
        { icon: '🥩', name: 'Dinner', calories: 0, description: 'Not logged yet', logged: false }
    ]

    // Weight vs Calories (30 days)
    const weightData = [
        { day: 1, weight: 185, calories: 2800 },
        { day: 5, weight: 184.5, calories: 2600 },
        { day: 10, weight: 183.8, calories: 2700 },
        { day: 15, weight: 182.5, calories: 2500 },
        { day: 20, weight: 181.8, calories: 2400 },
        { day: 25, weight: 181.2, calories: 2550 },
        { day: 30, weight: 180.5, calories: 2300 }
    ]

    // Micronutrients Checklist
    const micronutrients = [
        { id: 1, name: 'Fiber Goal', current: 25, goal: 30, unit: 'g', icon: Leaf, complete: false },
        { id: 2, name: 'Supplements', description: 'Creatine', icon: Pill, complete: true },
        { id: 3, name: 'No Alcohol', streak: 12, icon: Wine, complete: true },
        { id: 4, name: 'Omega-3', description: 'DHA/EPA', icon: Pill, complete: true },
        { id: 5, name: 'Fruit Servings', current: 2, goal: 5, unit: '', icon: Apple, complete: false },
        { id: 6, name: 'Vegetables', current: 7, goal: 7, unit: 'cups', icon: Leaf, complete: true }
    ]

    const caloriePercentage = (nutrition.caloriesEaten / nutrition.caloriesGoal) * 100
    const waterPercentage = (waterAmount / waterGoal) * 100
    const maxProtein = Math.max(...proteinData.map(d => d.amount), proteinData[0].target)

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-gray-900 p-8">
                <div className="max-w-[1600px] mx-auto">
                    {/* HEADER */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Nutrition Command</h1>
                        <p className="text-gray-400">Your body's fuel station</p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[1fr_320px] gap-6">
                        {/* LEFT COLUMN */}
                        <div className="space-y-6">
                            {/* TOP ROW: Fuel Gauge + Protein Consistency + Hydration */}
                            <div className="grid grid-cols-3 gap-6">
                                {/* FUEL GAUGE (Calorie Donut) */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity size={20} className="text-green-400" />
                                        <h3 className="font-bold text-white">Fuel Gauge</h3>
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

                                    {/* Current/Target */}
                                    <div className="text-center mb-4">
                                        <p className="text-sm text-gray-400 font-mono">
                                            {nutrition.caloriesEaten} / {nutrition.caloriesGoal} kcal
                                        </p>
                                    </div>

                                    {/* Big 3 Macros */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-gray-400">Protein</span>
                                            <span className={`text-sm font-bold font-mono ${nutrition.macros.protein.color}`}>
                                                {nutrition.macros.protein.left}g left
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-gray-400">Carbs</span>
                                            <span className={`text-sm font-bold font-mono ${nutrition.macros.carbs.color}`}>
                                                {nutrition.macros.carbs.left}g left
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-gray-400">Fats</span>
                                            <span className={`text-sm font-bold font-mono ${nutrition.macros.fat.color}`}>
                                                {nutrition.macros.fat.left}g left
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* PROTEIN CONSISTENCY (Bar Chart) */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp size={20} className="text-green-400" />
                                        <h3 className="font-bold text-white">Protein Consistency</h3>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-xs text-gray-400">Are you hitting your target?</p>
                                    </div>

                                    {/* Bar Chart */}
                                    <div className="relative h-32 flex items-end justify-between gap-2 mb-2">
                                        {/* Target line */}
                                        <div className="absolute inset-x-0 border-t-2 border-dashed border-yellow-500/50" style={{ bottom: `${(180 / maxProtein) * 100}%` }}>
                                            <span className="absolute -top-5 right-0 text-xs text-yellow-500 font-mono">180g</span>
                                        </div>

                                        {proteinData.map((day, i) => {
                                            const height = (day.amount / maxProtein) * 100
                                            const meetsTarget = day.amount >= day.target
                                            const isToday = i === 6
                                            return (
                                                <div key={i} className="flex-1 h-full flex flex-col items-center justify-end">
                                                    <div
                                                        className={`w-full rounded-t transition-all ${meetsTarget ? 'bg-green-400' : 'bg-gray-600'
                                                            } ${isToday ? 'opacity-50' : ''}`}
                                                        style={{ height: `${height}%` }}
                                                        title={`${day.amount}g`}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Day labels */}
                                    <div className="flex justify-between text-xs text-gray-400">
                                        {proteinData.map((day, i) => (
                                            <span key={i} className={i === 6 ? 'text-green-400 font-bold' : ''}>
                                                {day.day}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* HYDRATION STATION (Vertical Pill) */}
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Droplet size={20} className="text-blue-400" />
                                        <h3 className="font-bold text-white">Hydration</h3>
                                    </div>

                                    {/* Vertical Pill Progress */}
                                    <div className="flex flex-col items-center mb-4">
                                        <div className="relative w-16 h-32 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-300 transition-all duration-300"
                                                style={{ height: `${waterPercentage}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Amount Display */}
                                    <div className="text-center mb-4">
                                        <p className="text-2xl font-bold text-white font-mono">{waterAmount}ml</p>
                                        <p className="text-xs text-gray-400">of {waterGoal}ml</p>
                                    </div>

                                    {/* +/- Buttons */}
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={() => setWaterAmount(Math.max(0, waterAmount - 250))}
                                            className="w-12 h-12 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                        >
                                            <Minus size={18} className="text-gray-300" />
                                        </button>
                                        <button
                                            onClick={() => setWaterAmount(Math.min(waterGoal, waterAmount + 250))}
                                            className="w-12 h-12 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                                        >
                                            <Plus size={18} className="text-gray-300" />
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-500 mt-3 text-center">Last: 8:26 am</p>
                                </div>
                            </div>

                            {/* MEAL LOG HERO CARD */}
                            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <UtensilsCrossed size={20} className="text-green-400" />
                                        <h3 className="font-bold text-white text-lg">Meal Log</h3>
                                    </div>
                                    <button className="px-6 py-2 bg-green-400 hover:bg-green-500 text-gray-900 font-bold rounded-lg transition-colors flex items-center gap-2">
                                        <Plus size={18} />
                                        Log Meal
                                    </button>
                                </div>

                                {/* Meal Entries */}
                                <div className="space-y-4">
                                    {meals.map((meal, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700">
                                            <div className="flex items-center gap-4">
                                                <span className="text-3xl">{meal.icon}</span>
                                                <div>
                                                    <p className="font-bold text-white">{meal.name}</p>
                                                    <p className={`text-sm ${meal.logged ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        {meal.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                {meal.logged ? (
                                                    <p className="text-xl font-bold text-white font-mono">{meal.calories} kcal</p>
                                                ) : (
                                                    <span className="text-gray-500 text-sm">—</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* WEIGHT VS CALORIES ANALYSIS */}
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                                <div className="flex items-center gap-2 mb-4">
                                    <Weight size={20} className="text-teal-400" />
                                    <h3 className="font-bold text-white">Weight vs. Calories</h3>
                                </div>

                                <p className="text-xs text-gray-400 mb-4">Is your eating changing your weight?</p>

                                {/* SVG Chart */}
                                <div className="bg-gray-900 rounded-lg p-4">
                                    <svg width="100%" height="200" className="w-full" viewBox="0 0 600 200">
                                        {/* Grid lines */}
                                        <line x1="0" y1="50" x2="600" y2="50" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="100" x2="600" y2="100" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="150" x2="600" y2="150" stroke="#374151" strokeWidth="1" strokeDasharray="4 4" />

                                        {/* Weight line (teal) */}
                                        <path
                                            d="M 0 40 Q 100 35, 200 30 Q 300 15, 400 10 Q 500 5, 600 0"
                                            fill="none"
                                            stroke="#14B8A6"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />

                                        {/* Calorie line (orange) */}
                                        <path
                                            d="M 0 80 Q 100 60, 200 70 Q 300 40, 400 30 Q 500 45, 600 20"
                                            fill="none"
                                            stroke="#FB923C"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeDasharray="5 5"
                                        />

                                        {/* Labels */}
                                        <text x="10" y="195" fill="#9CA3AF" fontSize="10">Day 1</text>
                                        <text x="280" y="195" fill="#9CA3AF" fontSize="10">Day 15</text>
                                        <text x="560" y="195" fill="#9CA3AF" fontSize="10">Day 30</text>
                                    </svg>

                                    {/* Legend */}
                                    <div className="flex justify-center gap-6 mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-teal-400" />
                                            <span className="text-xs text-gray-400">Weight (lbs)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-orange-400" />
                                            <span className="text-xs text-gray-400">Avg Calories</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR: Micronutrient Checklist */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <div className="flex items-center gap-2 mb-6">
                                <Leaf size={20} className="text-green-400" />
                                <div>
                                    <h3 className="font-bold text-white">Health Optimizers</h3>
                                    <p className="text-xs text-gray-400">Daily micronutrient goals</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {micronutrients.map(item => {
                                    const Icon = item.icon
                                    const hasProgress = item.current !== undefined && item.goal !== undefined
                                    const progress = hasProgress ? (item.current / item.goal) * 100 : 0

                                    return (
                                        <div key={item.id} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.complete ? 'bg-green-500' : 'bg-gray-600'
                                                        }`}>
                                                        {item.complete && <span className="text-white text-xs">✓</span>}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-white text-sm">{item.name}</p>
                                                        {item.description && (
                                                            <p className="text-xs text-gray-400">{item.description}</p>
                                                        )}
                                                        {item.streak && (
                                                            <p className="text-xs text-gray-400">Streak: {item.streak} days</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {hasProgress && (
                                                <>
                                                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-2">
                                                        <div
                                                            className="h-full bg-green-400 transition-all duration-300"
                                                            style={{ width: `${progress}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1 font-mono">
                                                        {item.current}/{item.goal}{item.unit}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
