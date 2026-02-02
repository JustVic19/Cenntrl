'use client'

import { CheckCircle2, Circle, MoreVertical } from "lucide-react"

type TaskStatus = 'inbox' | 'next_action' | 'waiting' | 'someday'

interface Task {
    id: string
    title: string
    status: TaskStatus
    project?: string
}

interface StatusBoardProps {
    tasks: Task[]
}

const statusConfig = {
    inbox: { label: 'Inbox', color: '#6C5DD3' },
    next_action: { label: 'Next Actions', color: '#0CAF60' },
    waiting: { label: 'Waiting', color: '#FFA043' },
    someday: { label: 'Someday/Maybe', color: '#9A9FA5' },
}

export function StatusBoard({ tasks }: StatusBoardProps) {
    const getTasksByStatus = (status: TaskStatus) =>
        tasks.filter(task => task.status === status)

    const renderColumn = (status: TaskStatus) => {
        const config = statusConfig[status]
        const columnTasks = getTasksByStatus(status)

        return (
            <div key={status} className="flex-1 min-w-[280px]">
                <div className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: config.color }}
                            />
                            <h3 className="font-semibold text-[15px] text-[#1A1D1F]">{config.label}</h3>
                            <span className="text-xs font-bold text-[#9A9FA5] bg-[#F5F6FA] px-2 py-0.5 rounded-full">
                                {columnTasks.length}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {columnTasks.length === 0 ? (
                            <p className="text-sm text-[#9A9FA5] text-center py-8">No tasks</p>
                        ) : (
                            columnTasks.map(task => (
                                <div
                                    key={task.id}
                                    className="group p-3 rounded-xl hover:bg-[#F5F6FA] transition-all cursor-pointer border border-transparent hover:border-[#E5E7EB]"
                                >
                                    <div className="flex items-start gap-3">
                                        <button className="mt-0.5 text-[#9A9FA5] hover:text-[#6C5DD3] transition-colors">
                                            <Circle className="h-5 w-5" />
                                        </button>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[15px] text-[#1A1D1F] font-medium leading-snug">
                                                {task.title}
                                            </p>
                                            {task.project && (
                                                <p className="text-xs text-[#9A9FA5] mt-1">{task.project}</p>
                                            )}
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#9A9FA5] hover:text-[#1A1D1F]">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex gap-5 overflow-x-auto pb-4">
            {(Object.keys(statusConfig) as TaskStatus[]).map(renderColumn)}
        </div>
    )
}
