"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, BookOpen, MapPin } from "lucide-react"
import Footer from "@/components/footer"

export default function ClassSchedulePage() {
  const [selectedDay, setSelectedDay] = useState("today")
  const [selectedSemester, setSelectedSemester] = useState("current")

  // Sample class schedule data
  const classSchedule = [
    {
      day: "Monday",
      classes: [
        {
          time: "10:00 AM - 11:20 AM",
          course: "CS201:c langunge ",
          teacher: "avijit mitra",
          location: "Room 313",
          status: "upcoming",
        },
        {
          time: "11:20 AM - 12:10 PM",
          course: "bsch201: chemistry",
          teacher: "mansi mam",
          location: "Room 313",
          status: "upcoming",
        },
        {
          time: "12:10 PM - 1:00 PM",
          course: "ESCS: GRAPHICS LAB",
          teacher: "SANGITA MAM",
          location: "Lab 1(412)",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "10:30 AM - 12:00 PM",
          course: "CS401: Artificial Intelligence",
          teacher: "Prof. David Lee",
          location: "Room 131",
          status: "upcoming",
        },
        {
          time: "1:00 PM - 2:30 PM",
          course: "BSM201: mathematic",
          teacher: "Prof. James Wilson",
          location: "Room 313",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "9:00 AM - 10:30 AM",
          course: "CS301: Database Systems",
          teacher: "Prof. Sarah Johnson",
          location: "Room 201",
          status: "upcoming",
        },
        {
          time: "11:00 AM - 12:30 PM",
          course: "CS350: Web Technologies",
          teacher: "Prof. Michael Chen",
          location: "Room 202",
          status: "upcoming",
        },
        {
          time: "2:00 PM - 4:00 PM",
          course: "CS320: Operating Systems Lab",
          teacher: "Dr. Emily Rodriguez",
          location: "Lab 1",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "10:30 AM - 12:00 PM",
          course: "CS401: Artificial Intelligence",
          teacher: "Prof. David Lee",
          location: "Room 204",
          status: "upcoming",
        },
        {
          time: "1:00 PM - 2:30 PM",
          course: "CS310: Data Structures",
          teacher: "Prof. James Wilson",
          location: "Room 203",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          time: "9:00 AM - 10:30 AM",
          course: "CS301: Database Systems",
          teacher: "Prof. Sarah Johnson",
          location: "Room 201",
          status: "upcoming",
        },
        {
          time: "11:00 AM - 1:00 PM",
          course: "CS350: Web Technologies Lab",
          teacher: "Prof. Michael Chen",
          location: "Lab 2",
          status: "upcoming",
        },
        {
          time: "1:00 PM - 2:30 PM",
          course: "HMHU 201: ENGLISH",
          teacher: "SMD",
          location: "Room 313",
          status: "upcoming",
        },
      ],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Badge className="bg-green-500">Ongoing</Badge>
      case "completed":
        return <Badge className="bg-gray-500">Completed</Badge>
      case "upcoming":
        return <Badge className="bg-blue-500">Upcoming</Badge>
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
          <p className="text-gray-500">View your weekly class schedule</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Select Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Semester (Spring 2025)</SelectItem>
              <SelectItem value="previous">Previous Semester (Fall 2024)</SelectItem>
              <SelectItem value="next">Next Semester (Fall 2025)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="daily">Daily View</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly">
            <div className="space-y-6">
              {classSchedule.map((day) => (
                <Card key={day.day}>
                  <CardHeader className="pb-2">
                    <CardTitle>{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead className="hidden md:table-cell">Teacher</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day.classes.map((cls, index) => (
                          <TableRow key={index}>
                            <TableCell className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="hidden md:inline">{cls.time}</span>
                              <span className="md:hidden">{cls.time.split(" - ")[0]}</span>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{cls.course.split(":")[0]}</div>
                              <div className="text-sm text-gray-500 hidden md:block">{cls.course.split(": ")[1]}</div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{cls.teacher}</TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                {cls.location}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(cls.status)}</TableCell>
                          </TableRow>
                        ))}
                        {day.classes.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                              No classes scheduled for this day
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Today&apos;s Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {classSchedule[0].classes.map((cls, index) => (
                    <div key={index} className="flex flex-col md:flex-row border rounded-lg p-4">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          <h3 className="font-medium">{cls.course}</h3>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          {cls.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {cls.location}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-start md:items-end">
                        <div className="text-sm text-gray-500 mb-2">{cls.teacher}</div>
                        {getStatusBadge(cls.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
