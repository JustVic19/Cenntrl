'use client'

import { TrendingUp } from "lucide-react"

export function XPSystem() {
    // Mock XP data
    const currentXP = 3750
    const currentLevel = 4
    const xpForNextLevel = 4000
    const progress = (currentXP / xpForNextLevel) * 100

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
                <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#6C5DD3]" />
                    <h3 className="font-semibold text-[15px] text-[#1A1D1F]">Progress</h3>
                </div>
                <div className="text-right">
                    <p className="text-xs text-[#9A9FA5]">Level</p>
                    <p className="text-2xl font-bold text-[#1A1D1F]">{currentLevel}</p>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between text-xs text-[#9A9FA5] mb-2">
                    <span>{currentXP} XP</span>
                    <span>{xpForNextLevel} XP</span>
                </div>
                <div className="h-3 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-[#7B68EE] to-[#6C5DD3] rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-xs text-[#6F767E] mt-2 text-center">
                    {xpForNextLevel - currentXP} XP to Level {currentLevel + 1}
                </p>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-xs text-[#9A9FA5] mb-1">Today</p>
                    <p className="text-sm font-bold text-[#1A1D1F]">+250 XP</p>
                </div>
                <div>
                    <p className="text-xs text-[#9A9FA5] mb-1">Week</p>
                    <p className="text-sm font-bold text-[#1A1D1F]">+1,450 XP</p>
                </div>
                <div>
                    <p className="text-xs text-[#9A9FA5] mb-1">Total</p>
                    <p className="text-sm font-bold text-[#6C5DD3]">{currentXP.toLocaleString()} XP</p>
                </div>
            </div>
        </div>
    )
}
