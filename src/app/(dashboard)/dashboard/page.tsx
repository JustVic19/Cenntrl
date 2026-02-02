import { UniversalCapture } from "@/components/dashboard/capture/universal-capture"
import { InboxCard } from "@/components/dashboard/stats/inbox-card"
import { StatusBoard } from "@/components/dashboard/capture/status-board"
import { VelocityChart } from "@/components/dashboard/planning/velocity-chart"
import { FocusBudget } from "@/components/dashboard/planning/focus-budget"
import { DailyTimeline } from "@/components/dashboard/planning/daily-timeline"
import { ModeToggle } from "@/components/dashboard/navigation/mode-toggle"
import { ContextFilter } from "@/components/dashboard/navigation/context-filter"
import { ProjectDropdown } from "@/components/dashboard/navigation/project-dropdown"
import { HotList } from "@/components/dashboard/execution/hot-list"
import { PomodoroTimer } from "@/components/dashboard/execution/pomodoro-timer"
import { XPSystem } from "@/components/dashboard/execution/xp-system"

// Mock data - will be replaced with real Supabase data
const mockTasks = [
    { id: '1', title: 'Review Q1 budget proposal', status: 'inbox' as const, project: 'Finance' },
    { id: '2', title: 'Schedule team standup', status: 'inbox' as const },
    { id: '3', title: 'Call plumber about kitchen sink', status: 'inbox' as const, project: 'Home' },
    { id: '4', title: 'Write blog post draft', status: 'next_action' as const, project: 'Content' },
    { id: '5', title: 'Code review for PR #234', status: 'next_action' as const, project: 'Cenntrl' },
    { id: '6', title: 'Respond to client email', status: 'next_action' as const },
    { id: '7', title: 'Waiting for design feedback', status: 'waiting' as const, project: 'Cenntrl' },
    { id: '8', title: 'Learn Spanish', status: 'someday' as const },
    { id: '9', title: 'Build mobile app', status: 'someday' as const, project: 'Ideas' },
]

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-[1440px] mx-auto space-y-8">

                {/* Header Section */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-[32px] font-bold text-[#1A1D1F] mb-1">
                            GTD Dashboard.
                        </h1>
                        <p className="text-[#6F767E]">Capture, organize, and execute your work.</p>
                    </div>

                    {/* Universal Capture */}
                    <UniversalCapture />
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <InboxCard count={3} trend="+2 today" />

                    <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                        <p className="text-sm text-[#6F767E] font-medium mb-4">Next Actions</p>
                        <p className="text-[32px] font-bold text-[#1A1D1F]">3</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                        <p className="text-sm text-[#6F767E] font-medium mb-4">Completed Today</p>
                        <p className="text-[32px] font-bold text-[#1A1D1F]">7</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                        <p className="text-sm text-[#6F767E] font-medium mb-4">Total Tasks</p>
                        <p className="text-[32px] font-bold text-[#1A1D1F]">{mockTasks.length}</p>
                    </div>
                </div>

                {/* Context & Mode Controls */}
                <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                    <ModeToggle />
                    <div className="flex items-center gap-3">
                        <ContextFilter />
                        <ProjectDropdown />
                    </div>
                </div>

                {/* Planning & Velocity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <VelocityChart />
                    <FocusBudget />
                    <DailyTimeline />
                </div>

                {/* Execution Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <HotList />
                    <PomodoroTimer />
                    <XPSystem />
                </div>

                {/* Status Board */}
                <div>
                    <h2 className="text-xl font-semibold text-[#1A1D1F] mb-4">Task Flow</h2>
                    <StatusBoard tasks={mockTasks} />
                </div>

            </div>
        </div>
    )
}
