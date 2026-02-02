'use client'

import { Calendar, Clock } from "lucide-react"
import { useState } from "react"

interface CalendarEvent {
    id: string
    title: string
    time: string
    duration: string
    attendees?: string
}

export function DailyTimeline() {
    const [selectedDate, setSelectedDate] = useState(0) // 0 = today

    // Generate next 7 days
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() + i)
        return {
            day: date.getDate(),
            offset: i
        }
    })

    // Mock calendar events
    const events: CalendarEvent[] = [
        { id: '1', title: 'Team Standup', time: '09:00', duration: '30m', attendees: 'Team' },
        { id: '2', title: 'Deep Work Block', time: '10:00', duration: '2h' },
        { id: '3', title: 'Client Call', time: '14:00', duration: '1h', attendees: 'John, Sarah' },
        { id: '4', title: 'Review PRs', time: '16:00', duration: '1h' },
    ]

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            {/* Date Horizon */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#E5E7EB]">
                {dates.map((date) => (
                    <button
                        key={date.offset}
                        onClick={() => setSelectedDate(date.offset)}
                        className={`
                            flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold transition-all
                            ${selectedDate === date.offset
                                ? 'bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] text-white shadow-lg'
                                : 'text-[#6F767E] hover:bg-[#F5F6FA]'
                            }
                        `}
                    >
                        {date.day}
                    </button>
                ))}
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#6C5DD3]" />
                    <h3 className="font-semibold text-[15px] text-[#1A1D1F]">Today's Timeline</h3>
                </div>
                <button className="text-sm text-[#6F767E] hover:text-[#6C5DD3] transition-colors">
                    View Calendar
                </button>
            </div>

            <div className="space-y-3">
                {events.length === 0 ? (
                    <p className="text-sm text-[#9A9FA5] text-center py-8">No events scheduled</p>
                ) : (
                    events.map((event, index) => (
                        <div
                            key={event.id}
                            className="group p-4 rounded-xl border border-[#E5E7EB] hover:border-[#6C5DD3] hover:bg-[#F5F6FA] transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex items-center gap-2 min-w-20">
                                    <Clock className="h-4 w-4 text-[#9A9FA5]" />
                                    <p className="text-sm font-semibold text-[#1A1D1F]">{event.time}</p>
                                </div>

                                <div className="flex-1">
                                    <p className="text-[15px] font-medium text-[#1A1D1F] mb-1">{event.title}</p>
                                    <div className="flex items-center gap-3 text-xs text-[#9A9FA5]">
                                        <span>{event.duration}</span>
                                        {event.attendees && (
                                            <>
                                                <span>•</span>
                                                <span>{event.attendees}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className={`w-1 h-10 rounded-full ${index % 2 === 0 ? 'bg-gradient-to-b from-[#7B68EE] to-[#6C5DD3]' : 'bg-[#EFEFEF]'}`} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
