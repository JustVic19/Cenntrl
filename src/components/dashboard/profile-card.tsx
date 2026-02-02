'use client'

export function ProfileCard() {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })

    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] mb-5">
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7B68EE] to-[#6C5DD3] flex items-center justify-center text-white text-xl font-bold">
                    V
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h3 className="font-semibold text-[15px] text-[#1A1D1F]">Victor</h3>
                    <p className="text-xs text-[#6F767E] mt-0.5">Deep Work Mode</p>
                </div>

                {/* Time */}
                <div className="text-right">
                    <p className="text-sm font-bold text-[#1A1D1F]">{currentTime}</p>
                    <p className="text-xs text-[#9A9FA5]">Local</p>
                </div>
            </div>
        </div>
    )
}
