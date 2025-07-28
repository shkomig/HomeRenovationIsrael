// בואו נוודא שהשרת מוגדר נכון
import express, { type Request, Response, NextFunction } from 'express'
import { createServer } from 'http'
import { registerRoutes } from './routes'
import { setupVite, serveStatic, log } from './vite'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// לוגינג
app.use((req, res, next) => {
  const start = Date.now()
  const path = req.path
  let capturedJsonResponse: Record<string, any> | undefined = undefined

  const originalResJson = res.json
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson
    return originalResJson.apply(res, [bodyJson, ...args])
  }

  res.on('finish', () => {
    const duration = Date.now() - start
    if (path.startsWith('/api')) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + '…'
      }

      log(logLine)
    }
  })

  next()
})

;(async () => {
  try {
    await registerRoutes(app)

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500
      const message = err.message || 'Internal Server Error'
      console.error('Error:', err)
      res.status(status).json({ message })
    })

    // הפעלת השרת
    const port = process.env.PORT || 5000
    const server = createServer(app)

    // הגדרת פיתוח (Vite) מול ייצור
    if (app.get('env') === 'development') {
      await setupVite(app, server)
    } else {
      serveStatic(app)
    }

    server.listen(port, () => {
      log(`🚀 Server running at http://localhost:${port}`)
      log(`📱 Open your browser and go to: http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
})()
