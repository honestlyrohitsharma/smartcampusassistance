"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Bell, MapPin, UserCheck, Calendar, MessageSquare, LogOut, User, Sparkles } from "lucide-react"

export default function UserAwareNavigation() {
  const [userType, setUserType] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    const storedUserType = localStorage.getItem("userType")
    setUserType(storedUserType)
  }, [])

  if (!isClient) {
    return null // Return null on server-side to prevent hydration mismatch
  }

  // If on login page, don't show navigation
  if (pathname === "/login") {
    return null
  }

  const handleLogout = () => {
    localStorage.removeItem("userType")
    window.location.href = "/login"
  }

  return (
    <header className="bg-white shadow-md border-b border-purple-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Campus Fest 2025
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          {userType && (
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <User className="h-4 w-4" />
              <span>Logged in as {userType}</span>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-purple-200 text-purple-600 hover:bg-purple-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-2">
        <nav className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          <Link href="/">
            <Button
              variant={pathname === "/" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/assignments">
            <Button
              variant={pathname === "/assignments" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/assignments"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Assignments</span>
            </Button>
          </Link>
          <Link href="/notices">
            <Button
              variant={pathname === "/notices" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/notices"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notices</span>
            </Button>
          </Link>
          <Link href="/campus-map">
            <Button
              variant={pathname === "/campus-map" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/campus-map"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <MapPin className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Campus Map</span>
            </Button>
          </Link>
          <Link href="/attendance">
            <Button
              variant={pathname === "/attendance" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/attendance"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <UserCheck className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Attendance</span>
            </Button>
          </Link>
          {userType === "student" ? (
            <Link href="/class-schedule">
              <Button
                variant={pathname === "/class-schedule" ? "default" : "outline"}
                size="sm"
                className={
                  pathname === "/class-schedule"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }
              >
                <Calendar className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Class Schedule</span>
              </Button>
            </Link>
          ) : (
            <Link href="/teacher-availability">
              <Button
                variant={pathname === "/teacher-availability" ? "default" : "outline"}
                size="sm"
                className={
                  pathname === "/teacher-availability"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }
              >
                <Calendar className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Teacher Schedule</span>
              </Button>
            </Link>
          )}
          <Link href="/chat">
            <Button
              variant={pathname === "/chat" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/chat"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Chat</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
