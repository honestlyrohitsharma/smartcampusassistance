"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Check, X } from "lucide-react"
import ChatbotButton from "@/components/chatbot-button"

import {
  ChartContainer,
  ChartLegend,
  ChartTitle,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartBar,
  ChartLine,
} from "@/components/ui/chart"

export default function AttendancePage() {
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedMonth, setSelectedMonth] = useState("may")

  // Sample attendance data
  const attendanceData = [
    { date: "May 1", status: "present" },
    { date: "May 2", status: "present" },
    { date: "May 3", status: "absent" },
    { date: "May 4", status: "weekend" },
    { date: "May 5", status: "weekend" },
    { date: "May 6", status: "present" },
    { date: "May 7", status: "present" },
    { date: "May 8", status: "present" },
    { date: "May 9", status: "present" },
    { date: "May 10", status: "absent" },
    { date: "May 11", status: "weekend" },
    { date: "May 12", status: "weekend" },
    { date: "May 13", status: "present" },
    { date: "May 14", status: "present" },
    { date: "May 15", status: "present" },
  ]

  // Sample chart data
  const chartData = [
    { subject: "Database Systems", attendance: 85 },
    { subject: "Web Technologies", attendance: 92 },
    { subject: "Artificial Intelligence", attendance: 78 },
    { subject: "Operating Systems", attendance: 88 },
    { subject: "Computer Networks", attendance: 95 },
  ]

  // Sample monthly trend data
  const trendData = [
    { month: "Jan", attendance: 90 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 85 },
    { month: "Apr", attendance: 82 },
    { month: "May", attendance: 87 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-500">Track and monitor your attendance records</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">87%</div>
                <div className="text-sm text-gray-500">Required: 75%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "87%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">92%</div>
                <div className="text-sm text-gray-500">13/15 days</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Lowest Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">78%</div>
                <div className="text-sm text-gray-500">Artificial Intelligence</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="subjects">Subject-wise</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>Attendance Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="may">May 2025</SelectItem>
                      <SelectItem value="april">April 2025</SelectItem>
                      <SelectItem value="march">March 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">
                      {day}
                    </div>
                  ))}
                  {attendanceData.map((day, index) => (
                    <div
                      key={index}
                      className={`text-center p-2 rounded-md ${
                        day.status === "present"
                          ? "bg-green-100 text-green-800"
                          : day.status === "absent"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <div className="text-sm">{day.date.split(" ")[1]}</div>
                      <div className="mt-1">
                        {day.status === "present" ? (
                          <Check className="h-4 w-4 mx-auto text-green-600" />
                        ) : day.status === "absent" ? (
                          <X className="h-4 w-4 mx-auto text-red-600" />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>Subject-wise Attendance</CardTitle>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="cs301">CS301: Database Systems</SelectItem>
                    <SelectItem value="cs350">CS350: Web Technologies</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer className="h-full">
                  <ChartTitle>Attendance Percentage by Subject</ChartTitle>
                  <ChartBar
                    data={chartData}
                    xAxis={<ChartXAxis dataKey="subject" />}
                    yAxis={<ChartYAxis />}
                    dataKey="attendance"
                    barSize={40}
                    fill="#4f46e5"
                  />
                  <ChartTooltip />
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer className="h-full">
                  <ChartTitle>Attendance Percentage Over Time</ChartTitle>
                  <ChartLine
                    data={trendData}
                    xAxis={<ChartXAxis dataKey="month" />}
                    yAxis={<ChartYAxis />}
                    dataKey="attendance"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                  <ChartLegend />
                  <ChartTooltip />
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <ChatbotButton />
    </div>
  )
}
