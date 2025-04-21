"use client"
import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizontal, Bot, User, Sparkles } from "lucide-react"

export default function ChatInterface() {
  const [showSuggestions, setShowSuggestions] = useState(true)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const handleQuickReply = (question) => {
    // Create a synthetic event to submit the form with the question
    const syntheticEvent = {
      preventDefault: () => {},
      currentTarget: {
        elements: {
          message: { value: question },
        },
      },
    }

    handleSubmit(syntheticEvent)
    setShowSuggestions(false)
  }

  const quickReplies = [
    "When is the next event?",
    "Where is the main stage?",
    "What time does the fest start?",
    "How do I register for competitions?",
    "Where can I find food stalls?",
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="mb-2 font-medium text-lg">Hi there! How can I help you with the campus fest?</p>
            <p className="text-sm">
              Ask me about events, schedules, venues, or anything else related to the campus fest.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className="mt-1">
                    {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className="leading-relaxed">{message.content}</div>
                </div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted border border-border">
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showSuggestions && messages.length === 0 && (
        <div className="px-4 pb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs whitespace-normal h-auto py-1.5"
                onClick={() => handleQuickReply(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            name="message"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about the fest..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
