import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Middleware configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

// Debug middleware - logs all incoming requests
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.url}`)
    next()
})

// Routes import
import userRouter from './routes/user.routes.js';

// Routes declaration
app.use("/api/v1/users", userRouter)

console.log("✅ Routes registered: /api/v1/users")

// 404 handler for unmatched routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Cannot ${req.method} ${req.url} - Route not found`
    })
})

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
})

export { app }