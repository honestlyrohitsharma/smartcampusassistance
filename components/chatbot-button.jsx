"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChatInterface from "./chat-interface"

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-0 animate-pulse"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:items-end md:justify-end md:p-6 backdrop-blur-sm">
          <Card className="w-full max-w-md h-[600px] md:h-[500px] flex flex-col shadow-xl border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="text-lg font-medium flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Fest Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ChatInterface />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
