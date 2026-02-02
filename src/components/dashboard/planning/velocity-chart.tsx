'use client'

export function VelocityChart() {
    // Mock data: Last 7 days completion counts
    const data = [
        { day: 'Mon', count: 5, label: 'M' },
        { day: 'Tue', count: 7, label: 'T' },
        { day: 'Wed', count: 4, label: 'W' },
        { day: 'Thu', count: 9, label: 'T' },
        { day: 'Fri', count: 6, label: 'F' },
        { day: 'Sat', count: 3, label: 'S' },
        { day: 'Sun', count: 2, label: 'S' },
    ]

    const maxCount = Math.max(...data.map(d => d.count))

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-sm text-[#6F767E] font-medium mb-2">Weekly Velocity</p>
                    <p className="text-5xl font-thin text-[#1A1D1F] leading-none">36</p>
                    <p className="text-sm text-[#0CAF60] font-bold mt-2">↗ +12% vs last week</p>
                </div>
                <button className="text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                    </svg>
                </button>
            </div>

            <div className="flex items-end justify-between gap-3 h-40">
                {data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full relative flex items-end" style={{ height: '140px' }}>
                            <div
                                className="w-full rounded-t-lg relative overflow-hidden transition-all hover:opacity-90"
                                style={{
                                    height: `${(item.count / maxCount) * 100}%`,
                                    background: 'linear-gradient(180deg, #7B68EE 0%, #6C5DD3 100%)'
                                }}
                            >
                                {/* Diagonal stripe pattern */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 6px)',
                                    }}
                                />
                                {/* Count badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A1D1F] text-white text-xs font-bold px-2 py-0.5 rounded-lg whitespace-nowrap">
                                    {item.count}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-[#9A9FA5]">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
