'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import { Play, Pause, RotateCcw, Volume2, Moon, Sun, Minimize2, X, SkipForward, Shield, Eye, EyeOff, CloudRain } from "lucide-react"

export default function FocusRoomPage() {
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [soundscape, setSoundscape] = useState("Silence")
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isZenMode, setIsZenMode] = useState(false)
    const [volume, setVolume] = useState(60)

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] p-6">
                {/* HEADER: Control Deck */}
                <div className="max-w-[1600px] mx-auto mb-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4 flex items-center justify-between">
                        {/* Left: Logo */}
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                            <span className="text-white font-bold text-lg">C</span>
                        </div>

                        {/* Center: Environmental Toggles */}
                        <div className="flex items-center gap-2">
                            {/* Soundscapes */}
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                                <CloudRain size={14} className="text-gray-500" />
                                <select
                                    value={soundscape}
                                    onChange={(e) => setSoundscape(e.target.value)}
                                    className="text-sm bg-transparent border-none focus:outline-none cursor-pointer text-gray-700"
                                >
                                    <option>Silence</option>
                                    <option>Rain</option>
                                    <option>White Noise</option>
                                    <option>Coffee Shop</option>
                                </select>
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                                {isDarkMode ? <Sun size={14} className="text-gray-500" /> : <Moon size={14} className="text-gray-500" />}
                                <span className="text-gray-700">{isDarkMode ? 'Light' : 'Dark'}</span>
                            </button>

                            {/* Zen Mode */}
                            <button
                                onClick={() => setIsZenMode(!isZenMode)}
                                className={`px-3 py-1.5 text-sm border rounded-lg transition-colors flex items-center gap-2 ${isZenMode
                                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                                    }`}
                            >
                                {isZenMode ? <EyeOff size={14} /> : <Eye size={14} />}
                                <span>Zen</span>
                            </button>
                        </div>

                        {/* Right: End Session */}
                        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                            <X size={16} />
                            End Session
                        </button>
                    </div>
                </div>

                {/* MAIN CONTENT: 7-Card Bento Grid */}
                <div className="max-w-[1600px] mx-auto space-y-5">
                    {/* TOP ROW: 3 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* 1. SESSION TIMER (Top Left) - SCALED UP */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">POMODORO TIMER</h3>

                            {/* Countdown Ring - Larger */}
                            <div className="flex flex-col items-center justify-center mb-6">
                                <div className="relative">
                                    <svg width="220" height="220" className="-rotate-90">
                                        <circle cx="110" cy="110" r="100" stroke="#E5E7EB" strokeWidth="10" fill="none" />
                                        <circle
                                            cx="110"
                                            cy="110"
                                            r="100"
                                            stroke="#FF4D00"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray="628.32"
                                            strokeDashoffset="157.08"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-6xl font-bold text-[#1A1D1F] mb-1">25:00</span>
                                        <span className="text-xs text-gray-500">Current: Drafting</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex justify-center gap-8 mb-6 text-sm">
                                <div className="text-center">
                                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Intervals</p>
                                    <p className="font-bold text-[#1A1D1F] text-lg">2/4</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Break Time</p>
                                    <p className="font-bold text-[#1A1D1F] text-lg">10m</p>
                                </div>
                            </div>

                            {/* Controls - Larger Primary Button */}
                            <div className="flex flex-col gap-2">
                                <button className="w-full py-3 rounded-lg bg-[#FF4D00] hover:bg-[#E64400] text-white font-semibold transition-colors flex items-center justify-center gap-2">
                                    {isTimerRunning ? (
                                        <>
                                            <Pause size={18} />
                                            Pause Focus
                                        </>
                                    ) : (
                                        <>
                                            <Play size={18} />
                                            Start Focus
                                        </>
                                    )}
                                </button>
                                <button className="w-full py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm text-gray-600">
                                    <RotateCcw size={16} />
                                    Reset
                                </button>
                            </div>
                        </div>

                        {/* 2. FLOW TIMELINE (Top Middle) */}
                        <div className="bg-[#1A1D1F] rounded-2xl p-6 shadow-sm text-white">
                            <h3 className="text-sm font-semibold text-gray-400 mb-4">CURRENT SESSION STRUCTURE</h3>

                            <div className="space-y-3">
                                {/* Active Task */}
                                <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF4D00] rounded-lg p-4">
                                    <p className="font-semibold">🔥 Deep Work: Draft Q3 Report</p>
                                    <p className="text-xs text-white/80 mt-1">25 minutes remaining</p>
                                </div>

                                {/* Upcoming Break */}
                                <div className="bg-gray-800 rounded-lg p-4 opacity-60">
                                    <p className="font-medium">☕ Short Break</p>
                                    <p className="text-xs text-gray-400 mt-1">5 minutes</p>
                                </div>

                                {/* Upcoming Task */}
                                <div className="bg-gray-800 rounded-lg p-4 opacity-60">
                                    <p className="font-medium">📧 Deep Work: Review Emails</p>
                                    <p className="text-xs text-gray-400 mt-1">25 minutes</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. MEDIA PLAYER (Top Right) - SUBDUED */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">NOW PLAYING</h3>

                            {/* Compact Layout: Small Album Art + Info */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* Small Album Art */}
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🎵</span>
                                </div>

                                {/* Track Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-[#1A1D1F] truncate">Lofi Hip Hop</p>
                                    <p className="text-sm text-gray-500 truncate">Beats to Relax To</p>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="space-y-3">
                                <button className="w-full py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm text-gray-600">
                                    <SkipForward size={16} />
                                    Skip
                                </button>

                                {/* Volume Slider */}
                                <div className="flex items-center gap-3">
                                    <Volume2 size={16} className="text-gray-500 flex-shrink-0" />
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={volume}
                                        onChange={(e) => setVolume(Number(e.target.value))}
                                        className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF4D00] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FF4D00] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                                    />
                                    <span className="text-xs text-gray-500 w-8 text-right">{volume}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ROW: 4 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {/* 4. BRAIN DUMP (Bottom Left) */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">BRAIN DUMP</h3>

                            {/* Thought List */}
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-[#FF4D00]">•</span> Buy milk
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-[#FF4D00]">•</span> Call Mom
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-[#FF4D00]">•</span> Check flights
                                </div>
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Type to capture thought..."
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D00]/20"
                            />
                        </div>

                        {/* 5. PHONE STATUS (Bottom Middle Left) - FLAT ICON */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">PHONE STATUS</h3>

                            <div className="flex flex-col items-center justify-center py-8">
                                <Shield className="w-12 h-12 text-[#00C853] mb-3" strokeWidth={1.5} />
                                <p className="text-2xl font-bold text-[#00C853]">Secured</p>
                                <p className="text-sm text-gray-500 mt-1">DND Active</p>
                            </div>
                        </div>

                        {/* 6. FLOW SCORE (Bottom Middle Right) */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">FLOW SCORE</h3>

                            <div className="flex flex-col items-center justify-center py-8">
                                <div className="text-6xl font-bold text-[#00C853] mb-2">92</div>
                                <p className="text-sm text-gray-500">Excellent!</p>
                            </div>
                        </div>

                        {/* 7. DAILY FOCUS CHART (Bottom Right) - GREEN NOW */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">DAILY FOCUS</h3>

                            {/* Bar Chart */}
                            <div className="flex items-end justify-between gap-2 h-32 mb-3">
                                <div className="flex flex-col items-center flex-1">
                                    <div className="w-full bg-gray-200 rounded-t" style={{ height: '60%' }}></div>
                                    <p className="text-xs text-gray-400 mt-2 font-medium">Thu</p>
                                    <p className="text-xs font-bold text-gray-600">60</p>
                                </div>
                                <div className="flex flex-col items-center flex-1">
                                    <div className="w-full bg-gray-200 rounded-t" style={{ height: '75%' }}></div>
                                    <p className="text-xs text-gray-400 mt-2 font-medium">Fri</p>
                                    <p className="text-xs font-bold text-gray-600">75</p>
                                </div>
                                <div className="flex flex-col items-center flex-1">
                                    <div className="w-full bg-gray-200 rounded-t" style={{ height: '45%' }}></div>
                                    <p className="text-xs text-gray-400 mt-2 font-medium">Sat</p>
                                    <p className="text-xs font-bold text-gray-600">45</p>
                                </div>
                                <div className="flex flex-col items-center flex-1">
                                    <div className="w-full bg-[#00C853] rounded-t" style={{ height: '82%' }}></div>
                                    <p className="text-xs text-[#1A1D1F] font-bold mt-2">NOW</p>
                                    <p className="text-xs font-bold text-[#00C853]">82</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
