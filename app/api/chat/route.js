import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export const runtime = "nodejs"

export async function POST(req) {
  try {
    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "OpenAI API key is missing. Please add OPENAI_API_KEY to your environment variables.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    const { messages } = await req.json()

    // Create a system message for the campus assistant
    const systemMessage = {
      role: "system",
      content: `You are a helpful campus assistant for a university. 
      You can provide information about assignments, notices, campus maps, attendance, 
      teacher availability, and other campus-related queries.
      You're also knowledgeable about the upcoming Campus Fest 2025.
      Be concise, friendly, and helpful. If you don't know something, suggest where the student might find that information.`,
    }

    // Use the AI SDK to stream the response
    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [systemMessage, ...messages],
    })

    // Return the response as a stream
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: error.message || "An error occurred while processing your request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
