'use client'

import { Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect } from "react"

export function PomodoroTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes
    const [isRunning, setIsRunning] = useState(false)
    const [mode, setMode] = useState<'work' | 'break'>('work')

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsRunning(false)
                    // Auto-switch mode
                    if (mode === 'work') {
                        setMode('break')
                        return 5 * 60 // 5 min break
                    } else {
                        setMode('work')
                        return 25 * 60 // 25 min work
                    }
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning, timeLeft, mode])

    const reset = () => {
        setIsRunning(false)
        setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60)
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
            <button className="absolute top-6 right-6 text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                </svg>
            </button>

            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[15px] text-[#1A1D1F]">Pomodoro</h3>
                <div className="flex gap-1">
                    <button
                        onClick={() => {
                            setMode('work')
                            setTimeLeft(25 * 60)
                            setIsRunning(false)
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${mode === 'work' ? 'bg-[#6C5DD3] text-white' : 'text-[#6F767E] hover:bg-[#F5F6FA]'
                            }`}
                    >
                        Work
                    </button>
                    <button
                        onClick={() => {
                            setMode('break')
                            setTimeLeft(5 * 60)
                            setIsRunning(false)
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${mode === 'break' ? 'bg-[#0CAF60] text-white' : 'text-[#6F767E] hover:bg-[#F5F6FA]'
                            }`}
                    >
                        Break
                    </button>
                </div>
            </div>

            <div className="text-center mb-6">
                <p className="text-5xl font-bold text-[#1A1D1F] mb-2">{formatTime(timeLeft)}</p>
                <p className="text-sm text-[#9A9FA5]">{mode === 'work' ? 'Focus time' : 'Take a break'}</p>
            </div>

            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] text-white p-4 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
                </button>
                <button
                    onClick={reset}
                    className="border border-[#E5E7EB] text-[#6F767E] p-4 rounded-xl hover:bg-[#F5F6FA] transition-colors"
                >
                    <RotateCcw className="h-6 w-6" />
                </button>
            </div>
        </div>
    )
}
