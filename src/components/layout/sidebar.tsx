"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, CheckSquare, LayoutDashboard, Monitor } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarNavItems = [
    {
        title: "Mission Control",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Tasks (GTD)",
        href: "/tasks",
        icon: CheckSquare,
    },
    {
        title: "Focus Room",
        href: "/focus",
        icon: Monitor,
    },
    {
        title: "Notebook",
        href: "/notebook",
        icon: BookOpen,
    },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("pb-12 min-h-screen border-r bg-sidebar", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Cenntrl
                    </h2>
                    <div className="space-y-1">
                        {sidebarNavItems.map((item) => (
                            <Button
                                key={item.href}
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start",
                                    pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                                )}
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
