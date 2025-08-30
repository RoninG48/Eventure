"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export function LoginForm() {
  const [userId, setUserId] = useState("") // regno/empid/adminid
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // We cannot directly compare bcrypt in JS; let Postgres do it
      const { data, error } = await supabase.rpc("verify_user", {
        p_user_id: userId,
        p_password: password,
        p_role: role,
      })

      if (error || !data) {
        setError("Invalid credentials")
        setIsLoading(false)
        return
      }

      // Redirect based on role
      switch (role) {
        case "student":
          router.push("/dashboard")
          break
        case "organizer":
          router.push("/dashboard/organizer")
          break
        case "admin":
          router.push("/dashboard/admin")
          break
        default:
          router.push("/dashboard")
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userId" className="text-white">
              {role === "student"
                ? "Registration Number"
                : role === "organizer"
                ? "Employee ID"
                : "Admin ID"}
            </Label>
            <Input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={
                role === "student"
                  ? "Enter Reg No"
                  : role === "organizer"
                  ? "Enter Emp ID"
                  : "Enter Admin ID"
              }
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-white">
              Role
            </Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="organizer">Event Organizer</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-200 hover:text-white">
            Forgot your password?
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
