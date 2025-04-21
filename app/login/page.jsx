"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, UserCircle, Sparkles } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e, userType) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Store user type in localStorage for conditional rendering
      localStorage.setItem("userType", userType)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-purple-200 shadow-xl">
        <CardHeader className="space-y-1 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-t-lg">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Campus Fest 2025</CardTitle>
          <CardDescription className="text-purple-100">Login to access your campus dashboard</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="student"
                className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <GraduationCap className="h-4 w-4" />
                Student
              </TabsTrigger>
              <TabsTrigger
                value="teacher"
                className="flex items-center gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <UserCircle className="h-4 w-4" />
                Teacher
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={(e) => handleLogin(e, "student")}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input
                      id="student-id"
                      placeholder="Enter your student ID"
                      required
                      defaultValue="S2023045"
                      className="border-purple-200 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      defaultValue="campus123"
                      className="border-purple-200 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="student-remember" />
                      <label htmlFor="student-remember" className="text-sm text-gray-500 cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm text-purple-600">
                      Forgot password?
                    </Button>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login as Student"}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="teacher">
              <form onSubmit={(e) => handleLogin(e, "teacher")}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-email">Email</Label>
                    <Input
                      id="teacher-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      defaultValue="professor@campus.edu"
                      className="border-purple-200 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teacher-password">Password</Label>
                    <Input
                      id="teacher-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      defaultValue="faculty123"
                      className="border-purple-200 focus-visible:ring-purple-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="teacher-remember" />
                      <label htmlFor="teacher-remember" className="text-sm text-gray-500 cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm text-purple-600">
                      Forgot password?
                    </Button>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login as Teacher"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-gray-500">
            <p>
              By logging in, you agree to our{" "}
              <Button variant="link" className="p-0 h-auto text-sm text-purple-600">
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button variant="link" className="p-0 h-auto text-sm text-purple-600">
                Privacy Policy
              </Button>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
