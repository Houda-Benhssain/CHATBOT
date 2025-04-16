export async function POST(request) {
    try {
      const { message, chatId } = await request.json()
      const responses = [
        "Bonjour comment je peut aider",
      ]
  
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
  
      await new Promise((resolve) => setTimeout(resolve, 1000))
  
      return Response.json({ message: randomResponse })
    } catch (error) {
      console.error("Error in chat API:", error)
      return Response.json({ error: "Failed to process request" }, { status: 500 })
    }
  }