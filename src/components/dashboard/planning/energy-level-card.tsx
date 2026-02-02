'use client'

export function EnergyLevelCard() {
    // Mock data: Energy levels by hour
    const data = [
        { hour: '6AM', level: 30 },
        { hour: '9AM', level: 85 },
        { hour: '12PM', level: 70 },
        { hour: '3PM', level: 50 },
        { hour: '6PM', level: 40 },
        { hour: '9PM', level: 20 },
    ]

    const maxLevel = 100

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-sm text-[#6F767E] font-medium mb-2">Energy Levels</p>
                    <p className="text-5xl font-thin text-[#1A1D1F] leading-none">85%</p>
                    <p className="text-sm text-[#0CAF60] font-bold mt-2">Peak hours</p>
                </div>
                <button className="text-[#9A9FA5] hover:text-[#1A1D1F] transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                    </svg>
                </button>
            </div>

            <div className="flex items-end justify-between gap-2 h-32">
                {data.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full relative flex items-end" style={{ height: '100px' }}>
                            <div
                                className="w-full rounded-t-lg bg-gradient-to-t from-[#7B68EE] to-[#6C5DD3] transition-all hover:opacity-90"
                                style={{ height: `${(item.level / maxLevel) * 100}%` }}
                            />
                        </div>
                        <p className="text-[10px] font-medium text-[#9A9FA5]">{item.hour}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
