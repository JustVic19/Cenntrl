'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    BookOpen, Calendar, ChevronLeft, ChevronRight, ArrowRight
} from "lucide-react"

export default function BookShelfPage() {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    // Mock data for active reads
    const activeReads = [
        {
            id: '1',
            title: 'Deep Work',
            author: 'Cal Newport',
            cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg',
            progress: 45,
            currentPage: 120,
            totalPages: 300,
            tags: ['Productivity', 'Focus'],
            velocity: 20,
            skill: 'Craft'
        },
        {
            id: '2',
            title: 'Atomic Habits',
            author: 'James Clear',
            cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
            progress: 78,
            currentPage: 250,
            totalPages: 320,
            tags: ['Habits', 'Self-Improvement'],
            velocity: 25,
            skill: 'Mind'
        },
        {
            id: '3',
            title: 'Company of One',
            author: 'Paul Jarvis',
            cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554891142i/37570605.jpg',
            progress: 12,
            currentPage: 40,
            totalPages: 320,
            tags: ['Business', 'Entrepreneurship'],
            velocity: 15,
            skill: 'Wealth'
        }
    ]

    // Weekly reading data (pages per day)
    const weeklyPages = [
        { day: 'Mon', pages: 25 },
        { day: 'Tue', pages: 30 },
        { day: 'Wed', pages: 45 },
        { day: 'Thu', pages: 50 },
        { day: 'Fri', pages: 35 },
        { day: 'Sat', pages: 40 },
        { day: 'Sun', pages: 55 }
    ]
    const maxPages = Math.max(...weeklyPages.map(d => d.pages))

    // Library composition data
    const composition = [
        { label: 'Wealth', percentage: 40, color: 'green-500' },
        { label: 'Mind', percentage: 30, color: 'purple-500' },
        { label: 'Craft', percentage: 30, color: 'orange-500' }
    ]
    const totalBooks = 8

    // Next up book
    const nextUp = {
        title: 'The Almanack of Naval Ravikant',
        author: 'Eric Jorgenson',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg',
        scheduledFor: 'Feb 15, 2026'
    }

    // Surfaced highlights
    const highlights = [
        {
            text: 'The ability to focus without distraction is becoming increasingly valuable in the economy.',
            book: 'Deep Work',
            page: 34
        },
        {
            text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
            book: 'Atomic Habits',
            page: 27
        },
        {
            text: 'Growth for the sake of growth is the ideology of the cancer cell.',
            book: 'Company of One',
            page: 12
        }
    ]

    // Progress circle component
    const ProgressCircle = ({ progress }: { progress: number }) => {
        const circumference = 2 * Math.PI * 35
        const offset = circumference - (progress / 100) * circumference

        return (
            <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="#F3F4F6"
                        strokeWidth="8"
                        fill="none"
                    />
                    <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="#FF4D00"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-500"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-900">
                    {progress}%
                </span>
            </div>
        )
    }

    // Calendar days (simple mock)
    const calendarDays = Array.from({ length: 31 }, (_, i) => ({
        number: i + 1,
        finished: [5, 12, 18, 24].includes(i + 1), // Mock finished book days
        today: i + 1 === 14
    }))

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] p-8">
                <div className="max-w-[1400px] mx-auto">
                    {/* Main Content + Sidebar Grid */}
                    <div className="grid grid-cols-[1fr_320px] gap-6">
                        {/* LEFT: Main Dashboard */}
                        <div className="space-y-6">
                            {/* TOP: Active Reads (3 Cards) */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Reads</h2>
                                <div className="grid grid-cols-3 gap-6">
                                    {activeReads.map((book) => (
                                        <div key={book.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                            {/* Progress Circle */}
                                            <ProgressCircle progress={book.progress} />

                                            {/* Book Title */}
                                            <h3 className="font-bold text-lg text-center mb-2 line-clamp-1">
                                                {book.title}
                                            </h3>

                                            {/* Genre Tags */}
                                            <div className="flex gap-2 justify-center mb-4 flex-wrap">
                                                {book.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Stats Row */}
                                            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                                <span>Page {book.currentPage}/{book.totalPages}</span>
                                                <span className="text-green-600 font-medium">
                                                    {book.velocity} pgs/day
                                                </span>
                                            </div>

                                            {/* Action Button */}
                                            <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                                Update Progress
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* MIDDLE: Charts (2x1 Grid) */}
                            <section className="grid grid-cols-2 gap-6">
                                {/* Left: Reading Consistency */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4">Reading Consistency</h3>

                                    {/* Bar Chart */}
                                    <div className="flex items-end justify-between h-40 gap-2">
                                        {weeklyPages.map((data, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center group">
                                                <div className="relative w-full">
                                                    <div
                                                        className="w-full bg-purple-500 rounded-t transition-all hover:bg-purple-600"
                                                        style={{ height: `${(data.pages / maxPages) * 160}px` }}
                                                    >
                                                        {/* Tooltip on hover */}
                                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                            {data.pages} pages
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-500 mt-2">
                                                    {data.day}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Library Composition */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4">Library Composition</h3>

                                    {/* Donut Chart (simplified - using stacked circles) */}
                                    <div className="relative w-40 h-40 mx-auto mb-4">
                                        <svg className="w-40 h-40 transform -rotate-90">
                                            {/* Wealth - 40% (green) */}
                                            <circle
                                                cx="80" cy="80" r="60"
                                                fill="none"
                                                stroke="#00C853"
                                                strokeWidth="20"
                                                strokeDasharray="150.8 377"
                                                strokeDashoffset="0"
                                            />
                                            {/* Mind - 30% (purple) */}
                                            <circle
                                                cx="80" cy="80" r="60"
                                                fill="none"
                                                stroke="#9C27B0"
                                                strokeWidth="20"
                                                strokeDasharray="113.1 377"
                                                strokeDashoffset="-150.8"
                                            />
                                            {/* Craft - 30% (orange) */}
                                            <circle
                                                cx="80" cy="80" r="60"
                                                fill="none"
                                                stroke="#FF9800"
                                                strokeWidth="20"
                                                strokeDasharray="113.1 377"
                                                strokeDashoffset="-263.9"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-gray-900">{totalBooks}</div>
                                                <div className="text-xs text-gray-500">Books</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Legend */}
                                    <div className="space-y-2">
                                        {composition.map((seg) => (
                                            <div key={seg.label} className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full bg-${seg.color}`}></div>
                                                    <span className="text-gray-700">{seg.label}</span>
                                                </div>
                                                <span className="font-medium text-gray-900">{seg.percentage}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* BOTTOM: Next Up Queue */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Up</h2>
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {/* Book Cover Thumbnail */}
                                            <img
                                                src={nextUp.cover}
                                                alt={nextUp.title}
                                                className="w-16 h-24 rounded object-cover shadow-sm"
                                            />

                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">{nextUp.title}</h3>
                                                <p className="text-sm text-gray-500">{nextUp.author}</p>
                                                <p className="text-sm text-gray-400 mt-1">
                                                    Scheduled for {nextUp.scheduledFor}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                                            Move to Active
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT: Sidebar (Calendar + Highlights) */}
                        <div className="space-y-6">
                            {/* Calendar Widget */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">July 2022</h3>
                                    <div className="flex gap-2">
                                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                            <ChevronLeft size={16} className="text-gray-600" />
                                        </button>
                                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                            <ChevronRight size={16} className="text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                        <div key={i} className="text-gray-400 text-xs font-medium">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                    {calendarDays.map((day, i) => (
                                        <div
                                            key={i}
                                            className={`
                                                w-8 h-8 flex items-center justify-center rounded-full text-xs transition-colors
                                                ${day.finished ? 'bg-green-500 text-white font-medium' : ''}
                                                ${day.today ? 'bg-purple-500 text-white font-medium' : ''}
                                                ${!day.finished && !day.today ? 'text-gray-700 hover:bg-gray-100 cursor-pointer' : ''}
                                            `}
                                        >
                                            {day.number}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Surfaced Highlights Widget */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Surfaced Highlights</h3>
                                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                                        View All
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {highlights.map((h, i) => (
                                        <div key={i} className="border-l-2 border-purple-500 pl-3">
                                            <p className="text-sm text-gray-700 italic mb-2 leading-relaxed">
                                                "{h.text}"
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {h.book} - Page {h.page}
                                            </p>
                                        </div>
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
