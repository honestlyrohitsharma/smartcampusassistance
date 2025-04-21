import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Download, Upload } from "lucide-react"
import ChatbotButton from "@/components/chatbot-button"

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-500">View and manage your course assignments</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Database Design Project</CardTitle>
                      <CardDescription>CS301: Database Systems</CardDescription>
                    </div>
                    <Badge variant="destructive" className="ml-2">
                      Due in 2 days
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Design and implement a database schema for a hospital management system. Include ER diagrams, schema
                    definitions, and sample queries.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Due: May 17, 2025 at 11:59 PM</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Instructions
                  </Button>
                  <Button size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Submit Assignment
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Machine Learning Algorithm Implementation</CardTitle>
                      <CardDescription>CS401: Artificial Intelligence</CardDescription>
                    </div>
                    <Badge variant="destructive" className="ml-2">
                      Due in 5 days
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Implement a neural network from scratch for image classification. Compare your implementation with
                    existing libraries.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Due: May 20, 2025 at 11:59 PM</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Instructions
                  </Button>
                  <Button size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Submit Assignment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="submitted">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Web Development Project</CardTitle>
                      <CardDescription>CS350: Web Technologies</CardDescription>
                    </div>
                    <Badge className="ml-2 bg-amber-500">Submitted</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Create a responsive web application using React and Next.js. Implement authentication and data
                    persistence.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Submitted: May 5, 2025 at 10:23 PM</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    View Submission
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="graded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Operating Systems Case Study</CardTitle>
                      <CardDescription>CS320: Operating Systems</CardDescription>
                    </div>
                    <Badge className="ml-2 bg-green-500">Grade: A</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Analyze and compare process scheduling algorithms in modern operating systems.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Graded: April 28, 2025</span>
                  </div>
                  <p className="text-sm font-medium">Feedback:</p>
                  <p className="text-sm text-gray-500">
                    Excellent analysis and comparison. Your implementation examples were particularly insightful.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    View Feedback
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <ChatbotButton />
    </div>
  )
}
