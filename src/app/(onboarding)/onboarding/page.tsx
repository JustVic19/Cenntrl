'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Monitor, ShieldAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function OnboardingPage() {
    const router = useRouter()
    const [selectedPersona, setSelectedPersona] = useState<"drill" | "therapist" | null>(null)

    const handleContinue = () => {
        // Ideally save to DB here
        router.push("/dashboard")
    }

    return (
        <div className="flex h-screen w-full items-center justify-center px-4 bg-muted/40">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Choose Your AI Companion</CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Who do you ned to keep you on track?
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2 pt-6">
                    <div
                        className={cn(
                            "cursor-pointer rounded-xl border-2 p-6 transition-all hover:bg-muted",
                            selectedPersona === "drill"
                                ? "border-primary bg-muted ring-2 ring-primary ring-offset-2"
                                : "border-transparent bg-card shadow-sm"
                        )}
                        onClick={() => setSelectedPersona("drill")}
                    >
                        <ShieldAlert className="h-12 w-12 mb-4 text-destructive" />
                        <h3 className="font-bold text-xl">The Drill Sergeant</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            "You missed your goal. Get back to work."
                            <br />
                            High accountability. Ruthless efficiency.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "cursor-pointer rounded-xl border-2 p-6 transition-all hover:bg-muted",
                            selectedPersona === "therapist"
                                ? "border-primary bg-muted ring-2 ring-primary ring-offset-2"
                                : "border-transparent bg-card shadow-sm"
                        )}
                        onClick={() => setSelectedPersona("therapist")}
                    >
                        <Monitor className="h-12 w-12 mb-4 text-primary" />
                        <h3 className="font-bold text-xl">The Therapist</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            "You seem tired. Let's prioritize rest today."
                            <br />
                            Gentle encouragement. Focus on wellness.
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                    <Button
                        size="lg"
                        className="w-full max-w-xs"
                        disabled={!selectedPersona}
                        onClick={handleContinue}
                    >
                        Initialize System
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
