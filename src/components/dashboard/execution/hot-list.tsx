'use client'

import { Zap, Circle } from "lucide-react"

interface HotTask {
    id: string
    title: string
    project?: string
    xp: number
}

export function HotList() {
    // Mock high-priority tasks
    const hotTasks: HotTask[] = [
        { id: '1', title: 'Code review for PR #234', project: 'Cenntrl', xp: 25 },
        { id: '2', title: 'Write blog post draft', project: 'Content', xp: 50 },
        { id: '3', title: 'Respond to client email', xp: 10 },
    ]

    return (
        <div className="bg-gradient-to-br from-[#2A2D2F] to-[#1A1D1F] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-[#FFE5B4]" />
                <h3 className="font-semibold text-white">Hot List</h3>
                <span className="ml-auto text-xs font-bold text-[#9A9FA5] bg-white/10 px-2 py-1 rounded-full">
                    {hotTasks.length}
                </span>
            </div>

            <p className="text-sm text-[#9A9FA5] mb-4">High-priority, ready-to-do tasks</p>

            <div className="space-y-2">
                {hotTasks.map((task) => (
                    <div
                        key={task.id}
                        className="group p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all cursor-pointer border border-white/20 hover:border-[#FFE5B4]/40"
                    >
                        <div className="flex items-start gap-3">
                            <button className="mt-0.5 text-[#9A9FA5] hover:text-[#FFE5B4] transition-colors">
                                <Circle className="h-5 w-5" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <p className="text-white font-medium leading-snug mb-1">
                                    {task.title}
                                </p>
                                <div className="flex items-center gap-2 text-xs">
                                    {task.project && (
                                        <span className="text-[#9A9FA5]">{task.project}</span>
                                    )}
                                    <span className="text-[#FFE5B4] font-semibold">+{task.xp} XP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
