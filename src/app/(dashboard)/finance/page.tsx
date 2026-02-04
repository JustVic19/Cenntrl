'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    DollarSign, TrendingUp, Utensils, Plane, Laptop, ShoppingBag,
    Plus, MoreVertical, ChevronDown
} from "lucide-react"

export default function FinancePage() {
    const [selectedPeriod, setSelectedPeriod] = useState('Month')

    // Financial data
    const netWorth = 143899.00
    const monthlyBurn = 3200 // Realistic personal budget
    const runway = (netWorth / monthlyBurn).toFixed(1)

    // 12-month growth data for sparkline
    const growthData = [135000, 136500, 138000, 137000, 139000, 140500, 139500, 141000, 142000, 141500, 143000, 143899]
    const growthPercentage = ((growthData[11] - growthData[0]) / growthData[0] * 100).toFixed(1)

    // Pulse check cards
    const pulseChecks = [
        {
            id: 'income',
            title: 'Monthly Income',
            amount: 6800,
            progress: 85,
            badge: '85% of goal',
            change: '+17%',
            gradient: 'from-green-500 to-green-600',
            sparkline: [5000, 5200, 5800, 6200, 6800]
        },
        {
            id: 'burn',
            title: 'Monthly Burn',
            amount: 3200,
            progress: 106,
            badge: '⚠️ 6% over',
            change: '+$180 over budget',
            gradient: 'from-orange-500 to-orange-600',
            sparkline: [2500, 2700, 2900, 3100, 3200]
        },
        {
            id: 'investment',
            title: 'Investment Value',
            amount: 47832,
            progress: 45,
            badge: '📈 Wealth Skill',
            change: '45% YTD return',
            gradient: 'from-purple-500 to-purple-600',
            sparkline: [33000, 36000, 40000, 44000, 47832]
        }
    ]

    // Subscriptions with brand colors
    const subscriptions = [
        { id: '1', name: 'Netflix', price: 9.99, renewsSoon: false, color: '#E50914', logo: 'N' },
        { id: '2', name: 'Adobe', price: 54.99, renewsSoon: false, color: '#FF0000', logo: 'Aa' },
        { id: '3', name: 'Spotify', price: 14.99, renewsSoon: true, color: '#1DB954', logo: '♪' }
    ]
    const totalSubscriptions = subscriptions.reduce((sum, sub) => sum + sub.price, 0)

    // Recent transactions
    const transactions = [
        {
            id: '1',
            name: 'Jane Cooper',
            date: '08 Sep, 2022',
            amount: 1200,
            category: 'income',
            icon: DollarSign,
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            id: '2',
            name: 'Leslie Alexander',
            date: '06 Sep, 2022',
            amount: 1750,
            category: 'income',
            icon: DollarSign,
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            id: '3',
            name: 'Flight Ticket',
            date: '08 Sep, 2022',
            amount: 500,
            category: 'transport',
            icon: Plane,
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            id: '4',
            name: 'Robert Fox',
            date: '08 Sep, 2022',
            amount: 4300,
            category: 'tech',
            icon: Laptop,
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600'
        },
        {
            id: '5',
            name: 'KFC',
            date: '08 Sep, 2022',
            amount: 189,
            category: 'food',
            icon: Utensils,
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600'
        },
        {
            id: '6',
            name: 'Jacob Jones',
            date: '08 Sep, 2022',
            amount: 840,
            category: 'shopping',
            icon: ShoppingBag,
            iconBg: 'bg-pink-100',
            iconColor: 'text-pink-600'
        }
    ]

    // Sparkline component
    const Sparkline = ({ data, color = "#00C853", width = 120, height = 50 }: { data: number[], color?: string, width?: number, height?: number }) => {
        const max = Math.max(...data)
        const min = Math.min(...data)
        const range = max - min

        const points = data.map((value, i) => {
            const x = (i / (data.length - 1)) * width
            const y = height - ((value - min) / range) * height
            return `${x},${y}`
        }).join(' ')

        return (
            <svg width={width} height={height} className="overflow-visible">
                <polyline
                    points={points}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        )
    }

    // Mini sparkline for pulse cards
    const MiniSparkline = ({ data }: { data: number[] }) => {
        const max = Math.max(...data)
        const min = Math.min(...data)
        const range = max - min

        const points = data.map((value, i) => {
            const x = (i / (data.length - 1)) * 60
            const y = 30 - ((value - min) / range) * 30
            return `${x},${y}`
        }).join(' ')

        return (
            <svg width={60} height={30} className="opacity-50">
                <polyline
                    points={points}
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                />
            </svg>
        )
    }

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] p-8">
                <div className="max-w-[1400px] mx-auto">
                    {/* Main Content + Sidebar Grid */}
                    <div className="grid grid-cols-[1fr_350px] gap-6">
                        {/* LEFT: Main Dashboard */}
                        <div className="space-y-6">
                            {/* TOP: Net Worth Command (Black Hero Card) */}
                            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-white shadow-xl">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-sm text-gray-400 mb-2">Net Worth</h3>
                                        <div className="text-5xl font-bold mb-4">
                                            ${netWorth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </div>

                                        {/* Runway Badge */}
                                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                                            <span>🏃</span>
                                            <span>{runway} Months Runway</span>
                                        </div>
                                    </div>

                                    {/* 12-Month Growth Sparkline */}
                                    <div className="flex flex-col items-end gap-2">
                                        <Sparkline data={growthData} color="#00C853" width={140} height={60} />
                                        <div className="text-green-500 text-sm font-medium flex items-center gap-1">
                                            <TrendingUp size={16} />
                                            {growthPercentage}%
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                        Log Expense
                                    </button>
                                    <button className="flex-1 border-2 border-white text-white py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                                        Add Asset
                                    </button>
                                </div>
                            </div>

                            {/* MIDDLE: Pulse Checks (3 Cards) */}
                            <div className="grid grid-cols-3 gap-6">
                                {pulseChecks.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white shadow-sm`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-medium opacity-90">{card.title}</h3>
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                {card.badge}
                                            </span>
                                        </div>

                                        <div className="text-3xl font-bold mb-4">
                                            ${card.amount.toLocaleString()}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-3">
                                            <div
                                                className="h-full bg-white rounded-full transition-all"
                                                style={{ width: `${Math.min(card.progress, 100)}%` }}
                                            ></div>
                                        </div>

                                        {/* Mini Trend + Change */}
                                        <div className="flex items-center justify-between">
                                            <MiniSparkline data={card.sparkline} />
                                            <span className="text-xs opacity-75">{card.change}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CHART: Burn Rate vs. Budget */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-lg text-gray-900">Burn Rate vs. Budget</h3>
                                    <select
                                        value={selectedPeriod}
                                        onChange={(e) => setSelectedPeriod(e.target.value)}
                                        className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
                                    >
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>

                                {/* Chart Legend */}
                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-0.5 bg-black"></div>
                                        <span className="text-gray-600">Actual Spending</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                                        <span className="text-gray-600">Budget Limit</span>
                                    </div>
                                </div>

                                {/* SVG Chart */}
                                <div className="relative h-64">
                                    <svg className="w-full h-full">
                                        {/* Y-axis labels */}
                                        <text x="5" y="20" className="text-xs fill-gray-400">$1200</text>
                                        <text x="5" y="90" className="text-xs fill-gray-400">$800</text>
                                        <text x="5" y="160" className="text-xs fill-gray-400">$400</text>
                                        <text x="5" y="230" className="text-xs fill-gray-400">$0</text>

                                        {/* Grid lines */}
                                        <line x1="50" y1="20" x2="100%" y2="20" stroke="#f0f0f0" strokeWidth="1" />
                                        <line x1="50" y1="90" x2="100%" y2="90" stroke="#f0f0f0" strokeWidth="1" />
                                        <line x1="50" y1="160" x2="100%" y2="160" stroke="#f0f0f0" strokeWidth="1" />

                                        {/* Budget line (Dotted) - at $750/week (~$3k/month budget) */}
                                        <polyline
                                            points="50,105 150,105 250,105 350,105 450,105 550,105 650,105"
                                            stroke="#9CA3AF"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            fill="none"
                                        />

                                        {/* Actual spending line (Solid) - hovering around $800/week */}
                                        <polyline
                                            points="50,140 150,100 250,130 350,85 450,115 550,95 650,145"
                                            stroke="#000000"
                                            strokeWidth="2.5"
                                            fill="none"
                                        />

                                        {/* Overspending indicator */}
                                        <circle cx="650" cy="145" r="5" fill="#FF4D00" />
                                    </svg>

                                    {/* X-axis labels */}
                                    <div className="flex justify-between mt-2 text-xs text-gray-400 px-12">
                                        <span>Mon</span>
                                        <span>Tue</span>
                                        <span>Wed</span>
                                        <span>Thu</span>
                                        <span>Fri</span>
                                        <span>Sat</span>
                                        <span>Sun</span>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM: Subscription Manager */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg text-gray-900">Subscriptions</h3>
                                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                                        Manage All
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Add subscription button */}
                                        <button className="w-16 h-16 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center text-white text-2xl transition-colors flex-shrink-0">
                                            <Plus size={24} />
                                        </button>

                                        {/* Subscription circles with brand logos */}
                                        {subscriptions.map((sub) => (
                                            <div key={sub.id} className="relative">
                                                <div
                                                    className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-100 shadow-sm"
                                                    style={{ backgroundColor: sub.color }}
                                                >
                                                    <span className="text-2xl font-bold text-white">{sub.logo}</span>
                                                </div>

                                                {/* Renewal alert dot */}
                                                {sub.renewsSoon && (
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                                                )}

                                                <div className="mt-2 text-center">
                                                    <p className="text-xs font-medium text-gray-900">{sub.name}</p>
                                                    <p className="text-xs text-gray-500">${sub.price}/m</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Total Fixed Cost Summary */}
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Total Fixed</p>
                                        <p className="text-2xl font-bold text-gray-900">${totalSubscriptions.toFixed(2)}/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Recent Activity Sidebar */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg text-gray-900">Recent Activity</h3>
                                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
                                    <option>Month</option>
                                    <option>Week</option>
                                    <option>Today</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                {transactions.map((tx) => (
                                    <div key={tx.id} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                                        <div className="flex items-center gap-3">
                                            {/* Category Icon */}
                                            <div className={`w-10 h-10 rounded-full ${tx.iconBg} flex items-center justify-center flex-shrink-0`}>
                                                <tx.icon size={18} className={tx.iconColor} />
                                            </div>

                                            <div>
                                                <p className="font-medium text-sm text-gray-900">{tx.name}</p>
                                                <p className="text-xs text-gray-500">{tx.date}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-bold text-sm text-gray-900">${tx.amount}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
