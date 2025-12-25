# UI Cedar Switch 3i3o Power

A React-based web interface for monitoring and controlling a Cedar Switch power
management device inputs and outputs.

## Features

- **Real-time Monitoring**: Track power metrics and system status with live
  charts
- **Relay Control**: Manage power relays through an intuitive interface
- **Device Logs**: View and analyze device operation logs
- **Authentication**: Secure access with JWT-based authentication
- **Responsive Dashboard**: Modern UI built with React and TypeScript

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router
- **Styling**: SCSS Modules, Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `/src/pages` - Main application pages (Dashboard, Settings, Device Logs)
- `/src/components` - Reusable UI components
- `/src/api` - API client configuration
- `/src/auth` - Authentication context and protected routes
- `/src/hooks` - Custom React hooks
- `/src/stores` - State management
- `/src/utils` - Utility functions and helpers
