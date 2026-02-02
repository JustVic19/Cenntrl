'use client'

import { Inbox } from "lucide-react"

interface InboxCardProps {
    count: number
    trend?: string
}

export function InboxCard({ count, trend }: InboxCardProps) {
    const progress = Math.max(0, 100 - (count / 10) * 100) // Inverse: fewer items = higher progress

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between mb-4">
                <p className="text-sm text-[#6F767E] font-medium">Inbox</p>
                {trend && (
                    <div className="bg-[#1A1D1F] text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                        {trend}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] p-3 rounded-xl">
                    <Inbox className="h-6 w-6 text-white" />
                </div>
                <p className="text-[32px] font-bold text-[#1A1D1F] leading-none">{count}</p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#9A9FA5]">
                    <span>Progress to Zero</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-[#EFEFEF] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-[#7B68EE] to-[#6C5DD3] rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    )
}
