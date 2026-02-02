'use client'

import { Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect } from "react"

export function FocusBudget() {
    const [isRunning, setIsRunning] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(5 * 60 * 60) // 5 hours in seconds

    const totalCapacity = 8 * 60 * 60 // 8 hours
    const percentage = (timeRemaining / totalCapacity) * 100

    // Format seconds to HH:MM
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        return `${hours}h ${mins}m`
    }

    // Simple countdown (in real app would track actual work time)
    useEffect(() => {
        if (!isRunning || timeRemaining <= 0) return

        const interval = setInterval(() => {
            setTimeRemaining(prev => Math.max(0, prev - 1))
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning, timeRemaining])

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-sm text-[#6F767E] font-medium mb-1">Focus Budget</p>
                    <p className="text-xs text-[#9A9FA5]">Daily capacity remaining</p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                {/* Circular Progress */}
                <div className="relative w-32 h-32 mb-6">
                    <svg className="w-full h-full -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            fill="none"
                            stroke="#EFEFEF"
                            strokeWidth="10"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
                            className="transition-all duration-500"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7B68EE" />
                                <stop offset="100%" stopColor="#6C5DD3" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-[#1A1D1F]">{formatTime(timeRemaining)}</p>
                        <p className="text-[10px] font-bold text-[#9A9FA5] uppercase tracking-wide">Remaining</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsRunning(!isRunning)}
                        className="bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] text-white p-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>
                    <button
                        onClick={() => {
                            setTimeRemaining(5 * 60 * 60)
                            setIsRunning(false)
                        }}
                        className="border border-[#E5E7EB] text-[#6F767E] p-3 rounded-xl hover:bg-[#F5F6FA] transition-colors"
                    >
                        <RotateCcw className="h-5 w-5" />
                    </button>
                </div>

                {/* Stats */}
                <div className="w-full mt-6 pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-xs text-[#9A9FA5] mb-1">Total</p>
                        <p className="text-sm font-bold text-[#1A1D1F]">8h</p>
                    </div>
                    <div>
                        <p className="text-xs text-[#9A9FA5] mb-1">Used</p>
                        <p className="text-sm font-bold text-[#1A1D1F]">3h</p>
                    </div>
                    <div>
                        <p className="text-xs text-[#9A9FA5] mb-1">Free</p>
                        <p className="text-sm font-bold text-[#6C5DD3]">{formatTime(timeRemaining)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
