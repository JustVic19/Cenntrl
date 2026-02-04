'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    Users, Calendar, Gift, MessageCircle, Phone, Mail, TrendingUp,
    AlertCircle, Clock, Plus, Utensils, Coffee, Gamepad2, Cake,
    ChevronRight
} from "lucide-react"

export default function CRMPage() {
    const [selectedFilter, setSelectedFilter] = useState('All')

    // Network Health calculation
    const totalVIPs = 12
    const activeVIPs = 9
    const healthScore = Math.round((activeVIPs / totalVIPs) * 100)
    const lostTouch = totalVIPs - activeVIPs

    // Outreach Queue - Daily 3
    const outreachQueue = [
        {
            id: '1',
            name: 'Mom',
            displayName: 'Mom',
            avatar: 'M',
            action: 'Call',
            lastContact: '3 months ago',
            cadence: 'Weekly',
            urgency: 'critical', // red
            bgColor: 'bg-pink-100',
            textColor: 'text-pink-600',
            buttonColor: 'bg-red-600 hover:bg-red-700' // Red for critical
        },
        {
            id: '2',
            name: 'Sarah',
            displayName: 'Sarah (Mentor)',
            avatar: 'S',
            action: 'Text',
            lastContact: '2 weeks ago',
            cadence: 'Bi-weekly',
            urgency: 'due', // orange
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600',
            buttonColor: 'bg-orange-600 hover:bg-orange-700' // Orange for due
        },
        {
            id: '3',
            name: 'David Chen',
            displayName: 'David Chen (Former Boss)',
            avatar: 'D',
            action: 'Email',
            lastContact: '1 month ago',
            cadence: 'Monthly',
            urgency: 'upcoming', // teal
            bgColor: 'bg-indigo-100',
            textColor: 'text-indigo-600',
            buttonColor: 'bg-teal-600 hover:bg-teal-700' // Teal for upcoming
        }
    ]

    // Social Calendar events
    const socialEvents = [
        {
            id: '1',
            title: 'Dinner with Sarah',
            date: 'Today',
            time: '7:00 PM',
            participants: ['S'],
            type: 'dinner',
            icon: Utensils,
            iconColor: 'text-orange-600',
            iconBg: 'bg-orange-100'
        },
        {
            id: '2',
            title: 'Board Game Night',
            date: 'Tomorrow',
            time: '6:00 PM',
            participants: ['A', 'M', 'J'],
            type: 'game',
            icon: Gamepad2,
            iconColor: 'text-purple-600',
            iconBg: 'bg-purple-100'
        },
        {
            id: '3',
            title: 'Coffee with Alex',
            date: 'Friday',
            time: '10:00 AM',
            participants: ['A'],
            type: 'coffee',
            icon: Coffee,
            iconColor: 'text-amber-700',
            iconBg: 'bg-amber-100'
        },
        {
            id: '4',
            title: 'Dad\'s Birthday Party',
            date: 'Saturday',
            time: '2:00 PM',
            participants: ['D'],
            type: 'birthday',
            icon: Cake,
            iconColor: 'text-pink-600',
            iconBg: 'bg-pink-100'
        }
    ]

    // VIP Circle - Tier 1 relationships
    const vipCircle = [
        {
            id: '1',
            name: 'Mom',
            avatar: 'M',
            relationship: 'Family',
            lastContact: '3 Months',
            cadence: 'Every 1 week',
            status: 'red', // 90 days > 7 days
            bgColor: 'bg-pink-100',
            textColor: 'text-pink-600'
        },
        {
            id: '2',
            name: 'Sarah',
            avatar: 'S',
            relationship: 'Mentor',
            lastContact: '1 Week',
            cadence: 'Every 2 weeks',
            status: 'green', // 7 days <= 14 days
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600'
        },
        {
            id: '3',
            name: 'Dad',
            avatar: 'D',
            relationship: 'Family',
            lastContact: '2 Weeks',
            cadence: 'Every 2 weeks',
            status: 'orange', // 14 days = 14 days (due)
            bgColor: 'bg-indigo-100',
            textColor: 'text-indigo-600'
        },
        {
            id: '4',
            name: 'Alex',
            avatar: 'A',
            relationship: 'Best Friend',
            lastContact: '5 Days',
            cadence: 'Every 2 weeks',
            status: 'green',
            bgColor: 'bg-green-100',
            textColor: 'text-green-600'
        },
        {
            id: '5',
            name: 'Jessica',
            avatar: 'J',
            relationship: 'Best Friend',
            lastContact: '3 Weeks',
            cadence: 'Every 3 weeks',
            status: 'orange',
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-700'
        },
        {
            id: '6',
            name: 'Mia',
            avatar: 'Mi',
            relationship: 'Close Friend',
            lastContact: '2 Months',
            cadence: 'Every 1 month',
            status: 'red',
            bgColor: 'bg-rose-100',
            textColor: 'text-rose-600'
        },
        {
            id: '7',
            name: 'Jordan',
            avatar: 'Jo',
            relationship: 'Colleague',
            lastContact: '1 Week',
            cadence: 'Every 3 weeks',
            status: 'green',
            bgColor: 'bg-cyan-100',
            textColor: 'text-cyan-600'
        },
        {
            id: '8',
            name: 'Taylor',
            avatar: 'T',
            relationship: 'College Friend',
            lastContact: '1 Month',
            cadence: 'Every 1 month',
            status: 'orange',
            bgColor: 'bg-violet-100',
            textColor: 'text-violet-600'
        }
    ]

    // Upcoming Birthdays
    const upcomingBirthdays = [
        {
            id: '1',
            name: 'Jessica',
            avatar: 'J',
            daysUntil: 1,
            giftIdea: 'Yoga Mat',
            planType: 'gift',
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-700'
        },
        {
            id: '2',
            name: 'Dad',
            avatar: 'D',
            daysUntil: 4,
            giftIdea: null,
            planType: 'call',
            bgColor: 'bg-indigo-100',
            textColor: 'text-indigo-600'
        },
        {
            id: '3',
            name: 'Mark',
            avatar: 'Mk',
            daysUntil: 14,
            giftIdea: 'Design Book',
            planType: 'gift',
            bgColor: 'bg-gray-100',
            textColor: 'text-gray-600'
        },
        {
            id: '4',
            name: 'Ashley',
            avatar: 'A',
            daysUntil: 21,
            giftIdea: 'Coffee Beans',
            planType: 'gift',
            bgColor: 'bg-teal-100',
            textColor: 'text-teal-600'
        },
        {
            id: '5',
            name: 'Taylor',
            avatar: 'T',
            daysUntil: 28,
            giftIdea: null,
            planType: 'call',
            bgColor: 'bg-violet-100',
            textColor: 'text-violet-600'
        }
    ]

    const getBorderColor = (urgency: string) => {
        if (urgency === 'critical') return 'border-red-400 bg-red-50'
        if (urgency === 'due') return 'border-orange-400 bg-orange-50'
        return 'border-teal-400 bg-teal-50'
    }

    const getButtonActionText = (daysUntil: number, planType: string) => {
        if (planType === 'call') return 'Wished HBD'
        if (daysUntil === 1) return 'Gift Sent'
        return 'Mark Done'
    }

    const getStatusRingColor = (status: string) => {
        if (status === 'green') return 'ring-green-500'
        if (status === 'orange') return 'ring-orange-500'
        return 'ring-red-500'
    }

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] p-8">
                <div className="max-w-[1600px] mx-auto">
                    {/* TOP ROW: Network Health + Outreach Queue */}
                    <div className="grid grid-cols-[350px_1fr] gap-6 mb-6">
                        {/* Network Health Score */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={20} className="text-teal-600" />
                                <h3 className="font-bold text-gray-900">Network Health</h3>
                            </div>

                            {/* Percentage Display */}
                            <div className="flex items-center justify-center mb-4">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90">
                                        {/* Background circle */}
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="#E5E7EB"
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        {/* Progress circle */}
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="#14B8A6"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 56}`}
                                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - healthScore / 100)}`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-teal-600">{healthScore}%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Warning Text */}
                            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg p-3">
                                <AlertCircle size={18} className="text-orange-600 flex-shrink-0" />
                                <p className="text-sm text-orange-700">
                                    You are losing touch with <span className="font-bold">{lostTouch} VIPs</span>
                                </p>
                            </div>
                        </div>

                        {/* Outreach Queue - Daily 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900">Outreach Queue</h3>
                                <span className="text-sm text-gray-500">The Daily 3</span>
                            </div>

                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {outreachQueue.map((person) => (
                                    <div
                                        key={person.id}
                                        className={`flex-shrink-0 w-72 border-2 ${getBorderColor(person.urgency)} rounded-xl p-4 transition-all hover:shadow-md`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-12 h-12 rounded-full ${person.bgColor} flex items-center justify-center flex-shrink-0`}>
                                                <span className={`text-lg font-bold ${person.textColor}`}>{person.avatar}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-900 truncate">{person.displayName}</p>
                                                <p className="text-xs text-gray-500">Last: {person.lastContact}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock size={14} className="text-gray-400" />
                                            <span className="text-xs text-gray-600">Goal: {person.cadence}</span>
                                        </div>

                                        <button className={`w-full ${person.buttonColor} text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}>
                                            {person.action === 'Call' && <Phone size={16} />}
                                            {person.action === 'Text' && <MessageCircle size={16} />}
                                            {person.action === 'Email' && <Mail size={16} />}
                                            {person.action} {person.name}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MAIN GRID: Calendar + VIP Circle + Birthdays */}
                    <div className="grid grid-cols-[280px_1fr_320px] gap-6">
                        {/* LEFT: Social Calendar */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900">Social Calendar</h3>
                            </div>

                            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-medium mb-4 flex items-center justify-center gap-2 transition-colors">
                                <Plus size={18} />
                                New Meeting
                            </button>

                            <div className="space-y-3">
                                {socialEvents.map((event) => (
                                    <div key={event.id} className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 rounded-full ${event.iconBg} flex items-center justify-center flex-shrink-0`}>
                                                <event.icon size={18} className={event.iconColor} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm text-gray-900 truncate">{event.title}</p>
                                                <p className="text-xs text-gray-500">{event.date} • {event.time}</p>

                                                {/* Participant avatars */}
                                                <div className="flex -space-x-2 mt-2">
                                                    {event.participants.map((p, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                                                        >
                                                            <span className="text-xs font-medium text-gray-600">{p}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CENTER: VIP Circle Grid */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg text-gray-900">VIP Circle Status</h3>

                                {/* Filter Pills */}
                                <div className="flex gap-2">
                                    {['All', 'Family', 'Friends'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setSelectedFilter(filter)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedFilter === filter
                                                ? 'bg-teal-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 4x2 Grid */}
                            <div className="grid grid-cols-4 gap-4">
                                {vipCircle.map((person) => (
                                    <div key={person.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                                        {/* Avatar with colored ring */}
                                        <div className="flex justify-center mb-3">
                                            <div className={`w-16 h-16 rounded-full ${person.bgColor} flex items-center justify-center ring-4 ${getStatusRingColor(person.status)}`}>
                                                <span className={`text-xl font-bold ${person.textColor}`}>{person.avatar}</span>
                                            </div>
                                        </div>

                                        <p className="font-semibold text-sm text-gray-900 text-center mb-1">{person.name}</p>
                                        <p className="text-xs text-gray-500 text-center mb-2">{person.relationship}</p>
                                        <p className="text-xs text-gray-400 text-center mb-3">Last: {person.lastContact}</p>

                                        {/* Cadence Pill */}
                                        <div className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full text-center mb-3">
                                            {person.cadence}
                                        </div>

                                        {/* Message Button - Ghost/Outline style */}
                                        <button className="w-full border border-gray-300 text-gray-600 py-1.5 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                                            <MessageCircle size={14} />
                                            Message
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Upcoming Birthdays & Gifts */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
                            <div className="flex items-center gap-2 mb-4">
                                <Gift size={20} className="text-pink-600" />
                                <h3 className="font-bold text-gray-900">Birthdays & Gifts</h3>
                            </div>

                            <div className="space-y-3">
                                {upcomingBirthdays.map((birthday) => (
                                    <div
                                        key={birthday.id}
                                        className={`p-4 rounded-lg border ${birthday.daysUntil === 1
                                            ? 'bg-teal-50 border-teal-200'
                                            : birthday.daysUntil <= 7
                                                ? 'bg-teal-50/50 border-teal-100'
                                                : 'bg-white border-gray-200'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-full ${birthday.bgColor} flex items-center justify-center flex-shrink-0`}>
                                                <span className={`text-sm font-bold ${birthday.textColor}`}>{birthday.avatar}</span>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">🎂</span>
                                                    <p className="font-semibold text-sm text-gray-900">{birthday.name}</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    {birthday.daysUntil === 1 ? 'Tomorrow' : `in ${birthday.daysUntil} days`}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Gift Idea or Plan */}
                                        {birthday.giftIdea ? (
                                            <p className="text-xs text-gray-600 mb-3">
                                                💡 Gift Idea: <span className="font-medium">{birthday.giftIdea}</span>
                                            </p>
                                        ) : (
                                            <p className="text-xs text-gray-600 mb-3">
                                                📞 Plan: Call them
                                            </p>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <button className="flex-1 text-xs border border-gray-300 text-gray-700 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                                Remind Me
                                            </button>
                                            <button className="flex-1 text-xs bg-teal-600 text-white py-1.5 rounded-lg hover:bg-teal-700 transition-colors">
                                                {getButtonActionText(birthday.daysUntil, birthday.planType)}
                                            </button>
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
