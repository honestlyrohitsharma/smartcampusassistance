"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import ChatbotButton from "@/components/chatbot-button"

export default function TeacherAvailabilityPage() {
  const [selectedDay, setSelectedDay] = useState("today")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample teacher data
  const teachers = [
    {
      id: 1,
      name: "rohit sharma",
      department: "Computer Science",
      status: "available",
      location: "Room 301, CS Building",
      collegetime: "10:00 AM - 12:00 PM",
      classes: [
        { time: "9:00 AM - 10:00 AM", course: "CS301: Database Systems", location: "Room 201" },
        { time: "2:00 PM - 3:30 PM", course: "CS401: Advanced Databases", location: "Lab 3" },
      ],
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      department: "Computer Science",
      status: "in-class",
      location: "Room 105, Main Building",
      collegetime: "1:00 PM - 3:00 PM",
      classes: [
        { time: "11:00 AM - 12:30 PM", course: "CS350: Web Technologies", location: "Room 202" },
        { time: "3:30 PM - 5:00 PM", course: "CS450: Cloud Computing", location: "Lab 2" },
      ],
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      department: "Computer Science",
      status: "unavailable",
      location: "On leave today",
      collegetime: "Not available",
      classes: [
        { time: "9:00 AM - 10:30 AM", course: "CS320: Operating Systems", location: "Room 203" },
        { time: "2:00 PM - 3:30 PM", course: "CS420: Distributed Systems", location: "Lab 1" },
      ],
      replacement: { name: "Dr. James Wilson", note: "For all classes today" },
    },
    {
      id: 4,
      name: "Prof.",
      department: "Computer Science",
      status: "available",
      location: "Room 305, CS Building",
      officeHours: "11:00 AM - 1:00 PM",
      classes: [
        { time: "10:30 AM - 12:00 PM", course: "CS401: Artificial Intelligence", location: "Room 204" },
        { time: "3:30 PM - 5:00 PM", course: "CS501: Machine Learning", location: "Lab 4" },
      ],
    },
  ]

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>
      case "in-class":
        return <Badge className="bg-amber-500">In Class</Badge>
      case "unavailable":
        return <Badge className="bg-red-500">Unavailable</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Availability</h1>
          <p className="text-gray-500">Check teacher schedules and replacements</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search teachers or departments..."
              className="pl-10 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
        </div>

        <Tabs defaultValue="availability" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="availability">Current Availability</TabsTrigger>
            <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="availability">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Teacher Availability Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Office Hours</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTeachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.department}</TableCell>
                        <TableCell>{getStatusBadge(teacher.status)}</TableCell>
                        <TableCell>{teacher.location}</TableCell>
                        <TableCell>{teacher.officeHours}</TableCell>
                      </TableRow>
                    ))}
                    {filteredTeachers.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                          No teachers found matching your search
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Teacher Class Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredTeachers.map((teacher) => (
                  <div key={teacher.id} className="mb-8 last:mb-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium">{teacher.name}</h3>
                        <p className="text-sm text-gray-500">{teacher.department}</p>
                      </div>
                      <div className="flex items-center">
                        {getStatusBadge(teacher.status)}
                        {teacher.replacement && <Badge className="ml-2 bg-purple-500">Replacement</Badge>}
                      </div>
                    </div>

                    {teacher.replacement && (
                      <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-md">
                        <p className="text-sm text-purple-800">
                          <span className="font-medium">Replacement:</span> {teacher.replacement.name}
                        </p>
                        <p className="text-sm text-purple-800">
                          <span className="font-medium">Note:</span> {teacher.replacement.note}
                        </p>
                      </div>
                    )}

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Location</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teacher.classes.map((cls, index) => (
                          <TableRow key={index}>
                            <TableCell className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              {cls.time}
                            </TableCell>
                            <TableCell>{cls.course}</TableCell>
                            <TableCell>{cls.location}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
                {filteredTeachers.length === 0 && (
                  <div className="text-center py-4 text-gray-500">No teachers found matching your search</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <ChatbotButton />
    </div>
  )
}
