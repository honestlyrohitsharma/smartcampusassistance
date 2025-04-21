"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, BookOpen, Calendar, MapPin, UserCheck, FileText, Trophy, Users, Sparkles, Clock } from "lucide-react"
import ChatbotButton from "@/components/chatbot-button"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [userType, setUserType] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)

    // Check if user is logged in - only on client side
    if (typeof window !== "undefined") {
      const storedUserType = localStorage.getItem("userType")
      setUserType(storedUserType)
    }

    setIsLoading(false)
  }, [])

  // Effect to handle redirect after state is updated
  useEffect(() => {
    if (!isLoading && !userType && isClient) {
      router.push("/login")
    }
  }, [isLoading, userType, router, isClient])

  if (isLoading || !isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!userType) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=800')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
                <Sparkles className="h-8 w-8 mr-2" />
                Smart Campus Assistant
              </h1>
              <p className="text-xl opacity-90">Your complete campus management solution</p>
            </div>
            <div className="hidden md:block">
              <Button className="bg-white text-purple-600 hover:bg-white/90">View Schedule</Button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Academic Calendar</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy className="h-5 w-5 mr-2" />
              <span>Campus Events</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span>Student Resources</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              View Full Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/assignments" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Assignments
                  </CardTitle>
                  <CardDescription>View and submit your assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-500 font-medium">2 assignments due this week</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/notices" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-amber-600" />
                    Notices
                  </CardTitle>
                  <CardDescription>Campus announcements and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">5 new notices today</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/class-timetable" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    Class Timetable
                  </CardTitle>
                  <CardDescription>View class schedules and teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">CSE A, B, C - 1st Year 2nd Semester</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/campus-map" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    Campus Map
                  </CardTitle>
                  <CardDescription>Navigate around campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Interactive map with building locations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/attendance" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-purple-600" />
                    Attendance
                  </CardTitle>
                  <CardDescription>Track your attendance records</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Current attendance: 87%</p>
                </CardContent>
              </Card>
            </Link>

            {userType === "student" ? (
              <Link href="/class-schedule" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-rose-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-rose-600" />
                      Class Schedule
                    </CardTitle>
                    <CardDescription>View your weekly class schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">3 classes today</p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Link href="/student-attendance" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-rose-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-rose-600" />
                      Student Attendance
                    </CardTitle>
                    <CardDescription>Take and manage student attendance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Record attendance and generate reports</p>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6">Upcoming Academic Events</h2>
          <Card className="border border-purple-100 shadow-md">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Mid-term Examinations</p>
                      <p className="text-sm text-gray-500">All departments</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 15 - May 25, 2025</p>
                </li>
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 text-pink-700 p-2 rounded-lg">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Tech Symposium</p>
                      <p className="text-sm text-gray-500">Computer Science Department</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 10, 2025</p>
                </li>
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Campus Recruitment Drive</p>
                      <p className="text-sm text-gray-500">Placement Cell</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 5, 2025</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Sparkles className="h-6 w-6 mr-2" />
                Smart Campus Assistant
              </h2>
              <p className="opacity-80">Your complete campus management solution</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Calendar className="h-4 w-4 mr-2" />
                Academic Calendar
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Users className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <ChatbotButton />
    </div>
  )
}
