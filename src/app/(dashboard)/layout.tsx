import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <div className="hidden w-64 md:flex">
                <Sidebar className="w-64" />
            </div>
            <main className="flex-1 overflow-y-auto bg-background p-8">
                {children}
            </main>
        </div>
    )
}
