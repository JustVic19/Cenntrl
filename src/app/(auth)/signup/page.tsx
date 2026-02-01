import Link from "next/link"
import { signup } from "../actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SignupPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center px-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Sign Up</CardTitle>
                    <CardDescription>
                        Create a new account to get started.
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password">Password</label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                        <Button formAction={signup} className="w-full">
                            Create account
                        </Button>
                        <div className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Login
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
