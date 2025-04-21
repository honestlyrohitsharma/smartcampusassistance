import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = "nodejs"

export async function POST(req) {
  try {
    const { messages } = await req.json()

    // Request the OpenAI API for the response
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are a helpful campus assistant for a university. 
          You can provide information about assignments, notices, campus maps, attendance, 
          teacher availability, and other campus-related queries.
          You're also knowledgeable about the upcoming Campus Fest 2025.
          Be concise, friendly, and helpful. If you don't know something, suggest where the student might find that information.`,
        },
        ...messages,
      ],
    })

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
