# Replit.md - בכל מכל כל (Construction Services Website)

## Overview

This is a full-stack web application for a construction and renovation services company called "בכל מכל כל" (Bechol Michol Kol). The application is built as a multilingual (Hebrew/English) landing page with a lead generation form that allows potential customers to submit their contact information and service requests.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Context for language switching, TanStack Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: REST API with JSON responses
- **Development**: Hot reload with tsx for TypeScript execution

### Data Storage Solutions
- **Current**: PostgreSQL database with Drizzle ORM (production-ready)
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Migration**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
1. **Language System**: Context-based i18n with Hebrew (RTL) and English (LTR) support
2. **Landing Page Sections**:
   - Hero section with company branding
   - Services showcase with icons
   - Photo gallery (placeholder images)
   - Customer testimonials
   - Contact form for lead generation
   - Social sharing capabilities
3. **UI Components**: Comprehensive shadcn/ui component library
4. **Form Handling**: React Hook Form with Zod validation

### Backend Components
1. **Express Server**: REST API with middleware for logging and error handling
2. **Storage Interface**: Abstracted storage layer (IStorage) for easy database switching
3. **Route Handlers**: Lead creation and retrieval endpoints
4. **Development Tools**: Vite integration for hot module replacement

### Database Schema
The application uses a simple leads table with the following structure:
- `id`: Auto-incrementing primary key
- `fullName`: Customer's full name
- `phone`: Contact phone number
- `city`: Customer's city
- `serviceType`: Type of service requested
- `notes`: Additional notes (optional)
- `language`: Interface language when form was submitted
- `createdAt`: Timestamp of lead creation

## Data Flow

### Lead Generation Flow
1. Customer fills out the contact form on the frontend
2. Form data is validated using Zod schema
3. POST request sent to `/api/leads` endpoint
4. Backend validates data and stores in memory/database
5. Success response triggers thank you modal
6. Toast notification confirms successful submission

### Language Flow
1. Language preference stored in localStorage
2. Context provider manages current language state
3. Document attributes updated for RTL/LTR layout
4. Translation function retrieves appropriate text
5. Form submissions include language preference

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with hooks and context
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Form Management**: React Hook Form with Hookform Resolvers
- **HTTP Client**: Native fetch API with TanStack Query wrapper
- **Date Handling**: date-fns for date formatting
- **Styling**: Tailwind CSS with class-variance-authority

### Backend Dependencies
- **Server**: Express.js with built-in middleware
- **Database**: Drizzle ORM with Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions (configured)
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict configuration with path mapping
- **Database**: Drizzle Kit for migrations
- **Runtime**: Node.js with ES modules

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Vite HMR for frontend, tsx watch for backend
- **Database**: In-memory storage for development
- **Port Configuration**: Express serves both API and static files

### Production Preparation
- **Build Process**: Vite builds frontend to `dist/public`
- **Backend Bundle**: esbuild bundles server code to `dist/index.js`
- **Database**: PostgreSQL with Neon serverless driver
- **Static Files**: Express serves built frontend files
- **Environment Variables**: DATABASE_URL required for production

### Deployment Considerations
- **Database Migration**: Run `npm run db:push` to sync schema
- **Environment Setup**: Configure DATABASE_URL for PostgreSQL
- **Build Commands**: `npm run build` for production build
- **Start Command**: `npm start` for production server

## Changelog
- July 08, 2025. Initial setup with bilingual website
- July 08, 2025. Added company logo integration in hero and navigation
- July 08, 2025. Migrated from in-memory storage to PostgreSQL database

## User Preferences

Preferred communication style: Simple, everyday language.