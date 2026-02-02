import { NavigationBar } from "@/components/layout/navigation-bar"
import { InboxCard } from "@/components/dashboard/stats/inbox-card"
import { StatusBoard } from "@/components/dashboard/capture/status-board"
import { VelocityChart } from "@/components/dashboard/planning/velocity-chart"
import { EnergyLevelCard } from "@/components/dashboard/planning/energy-level-card"
import { FocusBudget } from "@/components/dashboard/planning/focus-budget"
import { DailyTimeline } from "@/components/dashboard/planning/daily-timeline"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { ModeToggle } from "@/components/dashboard/navigation/mode-toggle"
import { ContextFilter } from "@/components/dashboard/navigation/context-filter"
import { ProjectDropdown } from "@/components/dashboard/navigation/project-dropdown"
import { HotList } from "@/components/dashboard/execution/hot-list"
import { PomodoroTimer } from "@/components/dashboard/execution/pomodoro-timer"
import { XPSystem } from "@/components/dashboard/execution/xp-system"
import { Search, Plus, Calendar, BarChart3, PieChart } from "lucide-react"

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
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F2F5F9] p-8">
                <div className="max-w-[1440px] mx-auto space-y-8">

                    {/* INLINE HEADER - Single Row */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-[32px] font-bold text-[#1A1D1F]">
                                GTD Dashboard.
                            </h1>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Date Pill */}
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                <Calendar className="h-4 w-4 text-[#6F767E]" />
                                <span className="text-sm font-medium text-[#1A1D1F]">{today}</span>
                            </div>

                            {/* New Task Button */}
                            <button className="flex items-center gap-2 bg-[#1A1D1F] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#2A2D2F] transition-colors">
                                <Plus className="h-4 w-4" />
                                New Task
                            </button>

                            {/* Search Bar - Pill Shaped */}
                            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full min-w-[280px] border border-gray-200 shadow-sm">
                                <Search className="h-4 w-4 text-[#9A9FA5]" />
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    className="bg-transparent text-sm text-[#1A1D1F] placeholder:text-[#9A9FA5] outline-none flex-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats Row - With Micro-Visuals */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <InboxCard count={3} trend="+2 today" />

                        {/* Next Actions - With Mini Bar Chart */}
                        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
                            <button className="absolute top-6 right-6 text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                                </svg>
                            </button>

                            <p className="text-sm text-[#6F767E] font-medium mb-4">Next Actions</p>
                            <div className="flex items-end justify-between">
                                <p className="text-[32px] font-bold text-[#1A1D1F]">3</p>
                                {/* Mini bar chart icon */}
                                <div className="flex items-end gap-0.5 h-8">
                                    <div className="w-1.5 bg-[#6C5DD3] rounded-full" style={{ height: '40%' }}></div>
                                    <div className="w-1.5 bg-[#6C5DD3] rounded-full" style={{ height: '70%' }}></div>
                                    <div className="w-1.5 bg-[#6C5DD3] rounded-full" style={{ height: '100%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Completed Today */}
                        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
                            <button className="absolute top-6 right-6 text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                                </svg>
                            </button>

                            <p className="text-sm text-[#6F767E] font-medium mb-4">Completed Today</p>
                            <p className="text-[32px] font-bold text-[#1A1D1F]">7</p>
                        </div>

                        {/* Total Tasks - With Mini Donut Chart */}
                        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
                            <button className="absolute top-6 right-6 text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                                </svg>
                            </button>

                            <p className="text-sm text-[#6F767E] font-medium mb-4">Total Tasks</p>
                            <div className="flex items-end justify-between">
                                <p className="text-[32px] font-bold text-[#1A1D1F]">{mockTasks.length}</p>
                                {/* Mini donut chart */}
                                <svg className="h-8 w-8" viewBox="0 0 32 32">
                                    <circle cx="16" cy="16" r="12" fill="none" stroke="#EFEFEF" strokeWidth="4" />
                                    <circle cx="16" cy="16" r="12" fill="none" stroke="#6C5DD3" strokeWidth="4"
                                        strokeDasharray="50 25" strokeDashoffset="0" transform="rotate(-90 16 16)" />
                                </svg>
                            </div>
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

                    {/* Main Content Grid - 2 Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                        {/* LEFT COLUMN - Spans 2 columns */}
                        <div className="lg:col-span-2 space-y-5">

                            {/* Planning & Velocity Grid - 3 CARDS */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <VelocityChart />
                                <EnergyLevelCard />
                                <FocusBudget />
                            </div>

                            {/* Execution Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <HotList />
                                <PomodoroTimer />
                                <XPSystem />
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="space-y-5">
                            <ProfileCard />
                            <DailyTimeline />
                        </div>

                    </div>

                    {/* Status Board - FULL WIDTH */}
                    <div>
                        <h2 className="text-xl font-semibold text-[#1A1D1F] mb-4">Task Flow</h2>
                        <StatusBoard tasks={mockTasks} />
                    </div>

                </div>
            </div>
        </>
    )
}
