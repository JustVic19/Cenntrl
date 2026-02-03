'use client'

import { useState } from 'react'
import { NavigationBar } from "@/components/layout/navigation-bar"
import {
    Inbox, FolderOpen, Building2, Archive, Plus, Home, ChevronRight,
    FileText, Timer, Target, Bold, Italic, CheckSquare, Link2, Sparkles,
    TrendingUp
} from "lucide-react"

export default function NotebookPage() {
    const [activeSection, setActiveSection] = useState('Projects')

    // Mock document data
    const document = {
        title: "App Categorization & Competitive Marketing Analysis",
        breadcrumbs: ["Projects", "Launch MVP", "Marketing Strategy"],
        tags: [
            { label: "#strategy", color: "purple" },
            { label: "#q1", color: "orange" },
            { label: "#mobile", color: "blue" }
        ],
        linkedGoal: {
            name: "Launch MVP",
            tasksCompleted: 34,
            tasksTotal: 50,
            progress: 68
        },
        extractedTasks: [
            { id: 1, text: "Call John about market research", completed: false },
            { id: 2, text: "Draft positioning statement", completed: true },
            { id: 3, text: "Review competitor pricing", completed: false }
        ],
        backlinks: [
            { title: "Q1 2026 Weekly Review", date: "Feb 1, 2026" },
            { title: "Product Roadmap Draft", date: "Jan 28, 2026" }
        ]
    }

    const Tag = ({ label, color }: { label: string; color: string }) => {
        const colorMap: Record<string, string> = {
            purple: 'bg-purple-100 text-purple-700',
            orange: 'bg-orange-100 text-orange-700',
            blue: 'bg-blue-100 text-blue-700',
            green: 'bg-green-100 text-green-700'
        }
        return (
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${colorMap[color]}`}>
                {label}
            </span>
        )
    }

    return (
        <>
            <NavigationBar />

            <div className="min-h-screen bg-[#F3F4F6] flex">
                {/* LEFT SIDEBAR: PARA Navigation */}
                <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6">
                    <nav className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => setActiveSection('Inbox')}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeSection === 'Inbox'
                                ? 'bg-purple-100 text-purple-600'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="Inbox"
                        >
                            <Inbox className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setActiveSection('Projects')}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeSection === 'Projects'
                                ? 'bg-purple-100 text-purple-600'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="Projects"
                        >
                            <FolderOpen className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setActiveSection('Areas')}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeSection === 'Areas'
                                ? 'bg-purple-100 text-purple-600'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="Areas"
                        >
                            <Building2 className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setActiveSection('Archive')}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeSection === 'Archive'
                                ? 'bg-purple-100 text-purple-600'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            title="Archive"
                        >
                            <Archive className="w-5 h-5" />
                        </button>
                    </nav>

                    {/* Floating + Button */}
                    <button
                        className="mt-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center"
                        title="New Note"
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 flex overflow-hidden">
                    {/* CENTER: Editor Canvas */}
                    <div className="flex-1 overflow-auto p-6">
                        <div className="max-w-[900px] mx-auto">
                            {/* White Paper Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[calc(100vh-120px)]">
                                {/* Top Navigation Bar */}
                                <div className="border-b border-gray-200 px-8 py-5">
                                    <nav className="flex items-center gap-2 text-sm">
                                        <Home className="w-4 h-4 text-gray-400" />
                                        {document.breadcrumbs.map((crumb, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <ChevronRight className="w-3 h-3 text-gray-400" />
                                                <span className={i === document.breadcrumbs.length - 1 ? "font-medium text-gray-900" : "text-gray-600"}>
                                                    {crumb}
                                                </span>
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                                {/* Document Header */}
                                <div className="px-12 py-8">
                                    <h1 className="text-3xl font-bold text-[#1A1D1F] mb-4">
                                        {document.title}
                                    </h1>

                                    {/* Tags Row */}
                                    <div className="flex gap-2 mb-6">
                                        {document.tags.map((tag, i) => (
                                            <Tag key={i} label={tag.label} color={tag.color} />
                                        ))}
                                    </div>
                                </div>

                                {/* Document Body */}
                                <div className="px-12 pb-12 prose prose-lg max-w-none">
                                    <ul className="space-y-3">
                                        <li>
                                            <strong>Category Diversity:</strong> Note management apps exhibit diverse categorization strategies. Some focus on productivity, while others emphasize creativity or collaboration.
                                        </li>
                                        <li>
                                            <strong>User Segmentation:</strong> Apps categorize themselves based on target user segments, such as students, professionals, or creative individuals.
                                        </li>
                                        <li>
                                            <strong>Feature-Based Categories:</strong> Categories often align with core features, such as note-taking, task management, file organization, and collaboration tools.
                                        </li>
                                    </ul>

                                    {/* Callout Block */}
                                    <div className="bg-[#E3F2FD] border-l-4 border-[#2196F3] rounded-lg p-6 my-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 bg-[#2196F3] rounded-lg flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#1A1D1F]">Competitive Marketing Analysis</h4>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            The competitive landscape reveals a clear trend: apps that combine note-taking with project management and goal tracking are gaining significant market share. This aligns perfectly with Cenntrl's positioning as an integrated LifeOS.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-bold mt-8 mb-4">Recommendations:</h3>
                                    <ul className="space-y-2">
                                        <li>Enhanced Categorization: Consider refining app categorization to better align with target user segments and highlight unique features.</li>
                                        <li>Differentiation Strategy: Emphasize distinctive features and benefits in marketing materials to stand out from competitors.</li>
                                        <li>Audience Engagement: Engage with users through social media, community forums, and feedback mechanisms to foster loyalty and improve user experience.</li>
                                        <li>Competitive Monitoring: Continuously monitor competitors' marketing strategies and feature updates to stay competitive in the market landscape.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Floating Formatting Dock */}
                        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                            <div className="bg-white rounded-full shadow-xl px-6 py-3 flex items-center gap-2 border border-gray-200">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Bold">
                                    <Bold className="w-5 h-5 text-gray-700" />
                                </button>
                                <div className="w-px h-6 bg-gray-300"></div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Italic">
                                    <Italic className="w-5 h-5 text-gray-700" />
                                </button>
                                <div className="w-px h-6 bg-gray-300"></div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Checkbox">
                                    <CheckSquare className="w-5 h-5 text-gray-700" />
                                </button>
                                <div className="w-px h-6 bg-gray-300"></div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Link">
                                    <Link2 className="w-5 h-5 text-gray-700" />
                                </button>
                                <div className="w-px h-6 bg-gray-300"></div>
                                <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors flex items-center gap-1 text-purple-600" title="AI Summary">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-sm font-medium">AI</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR: Smart Context */}
                    <div className="w-80 bg-[#F3F4F6] border-l border-gray-200 p-6 space-y-4 overflow-auto">
                        {/* Card 1: Focus Link */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-gray-900">Start Deep Work</h3>
                                <Timer className="w-5 h-5 text-gray-400" />
                            </div>
                            <button className="w-full bg-[#FF4D00] hover:bg-[#E64500] text-white py-3 rounded-lg font-medium transition-colors">
                                Open in Focus Room →
                            </button>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Current document will be pinned
                            </p>
                        </div>

                        {/* Card 2: Linked Goal */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-3">
                                <Target className="w-4 h-4 text-[#00C853]" />
                                <h4 className="text-sm font-semibold text-gray-900">Linked to Goal</h4>
                            </div>
                            <p className="text-lg font-bold text-[#1A1D1F] mb-2">{document.linkedGoal.name}</p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Tasks Completed</span>
                                <span className="text-sm font-semibold text-[#1A1D1F]">
                                    {document.linkedGoal.tasksCompleted} / {document.linkedGoal.tasksTotal}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-[#00C853] h-3 rounded-full transition-all"
                                    style={{ width: `${document.linkedGoal.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Card 3: Extracted Tasks */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">Tasks in Document</h4>
                            <div className="space-y-2">
                                {document.extractedTasks.map((task) => (
                                    <label key={task.id} className="flex items-start gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            className="mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            readOnly
                                        />
                                        <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {task.text}
                                        </span>
                                    </label>
                                ))}
                            </div>
                            <button className="text-xs text-[#9C27B0] font-medium mt-3 hover:underline">
                                + Extract More Tasks
                            </button>
                        </div>

                        {/* Card 4: Backlinks */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">Referenced In</h4>
                            <div className="space-y-3">
                                {document.backlinks.map((link, i) => (
                                    <button key={i} className="block w-full text-left hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors">
                                        <div className="flex items-center gap-2 text-sm text-gray-900 hover:text-[#9C27B0]">
                                            <FileText className="w-4 h-4 flex-shrink-0" />
                                            <span className="font-medium">{link.title}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 ml-6 mt-0.5">{link.date}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
