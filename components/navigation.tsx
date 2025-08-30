"use client"

import Link from "next/link"
import { Calendar, Home, Search, User, Bell, LogOut, MapPin, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const { user, logout } = useAuth()

  const getDashboardLink = () => {
    if (!user) return "/dashboard"
    switch (user.role) {
      case "admin":
        return "/dashboard/admin"
      case "organizer":
        return "/dashboard/organizer"
      default:
        return "/dashboard"
    } 
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Eventure</h1>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link href="/browse" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Search className="w-4 h-4" />
            <span>Events</span>
          </Link>
          <Link href="/venues" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <MapPin className="w-4 h-4" />
            <span>Venues</span>
          </Link>
            <Link href="/gallery" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Image className="w-4 h-4" />
            <span>Gallery</span>
            </Link>
          {user && (
            <Link href={getDashboardLink()} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <User className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                    </div>
                    <span className="text-gray-700">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/login">
                <Button variant="outline" className="bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
