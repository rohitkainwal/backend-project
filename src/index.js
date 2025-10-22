import Dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

// Load environment variables FIRST
Dotenv.config({
    path: './.env'
})

console.log("🔧 Environment loaded")
console.log("📡 PORT:", process.env.PORT)

// Connect to database and start server
connectDB()
.then(() => {
    // Listen for app errors
    app.on("error", (error) => {
        console.log("❌ Express app error:", error)
        throw error
    })
    
    // Start server
    const PORT = process.env.POR || 8000
    app.listen(PORT, () => {
        console.log(`\n✅ Server is running at: http://localhost:${PORT}`)
        console.log(`📍 Test endpoint: http://localhost:${PORT}/api/v1/users/register\n`)
    })
})
.catch((err) => {
    console.log("❌ MONGO DB connection failed !!!", err)
    process.exit(1)
})