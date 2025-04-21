"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Building, BookOpen, Coffee, Users, Utensils } from "lucide-react"
import ChatbotButton from "@/components/chatbot-button"

export default function CampusMapPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const buildings = [
    {
      id: "academic",
      name: "Academic Block",
      type: "academic",
      description: "Main academic building with classrooms and faculty offices",
    },
    {
      id: "library",
      name: "Central Library",
      type: "library",
      description: "Four-floor library with study spaces and digital resources",
    },
    {
      id: "cafeteria",
      name: "Student Cafeteria",
      type: "cafeteria",
      description: "Main dining area with multiple food options",
    },
    {
      id: "admin",
      name: "Administration Building",
      type: "admin",
      description: "Houses administrative offices and support services",
    },
    { id: "hostel", name: "Student Hostels", type: "hostel", description: "On-campus accommodation for students" },
    { id: "sports", name: "Sports Complex", type: "sports", description: "Indoor and outdoor sports facilities" },
  ]

  const filteredBuildings = buildings.filter((building) =>
    building.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getBuildingIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <BookOpen className="h-5 w-5" />
      case "library":
        return <Building className="h-5 w-5" />
      case "cafeteria":
        return <Utensils className="h-5 w-5" />
      case "admin":
        return <Users className="h-5 w-5" />
      case "hostel":
        return <Coffee className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Campus Map</h1>
          <p className="text-gray-500">Navigate and explore campus facilities</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search buildings..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-medium">Campus Buildings</h2>
              </div>
              <div className="divide-y max-h-[400px] overflow-y-auto">
                {filteredBuildings.map((building) => (
                  <Button
                    key={building.id}
                    variant="ghost"
                    className={`w-full justify-start px-4 py-3 h-auto ${
                      selectedBuilding === building.id ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setSelectedBuilding(building.id)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-500">{getBuildingIcon(building.type)}</div>
                      <div className="text-left">
                        <p className="font-medium">{building.name}</p>
                      </div>
                    </div>
                  </Button>
                ))}
                {filteredBuildings.length === 0 && (
                  <div className="p-4 text-center text-gray-500">No buildings found matching your search</div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <Card className="h-[500px] relative">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=500&width=800"
                      alt="Campus Map"
                      className="w-full h-full object-cover"
                    />

                    {selectedBuilding && (
                      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                        <h3 className="font-medium text-lg">
                          {buildings.find((b) => b.id === selectedBuilding)?.name}
                        </h3>
                        <p className="text-gray-500">{buildings.find((b) => b.id === selectedBuilding)?.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Find My Location
              </Button>
              <Button variant="outline" size="sm">
                <Building className="h-4 w-4 mr-2" />
                Show All Buildings
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Academic Areas
              </Button>
            </div>
          </div>
        </div>
      </main>

      <ChatbotButton />
    </div>
  )
}
