# Lyricverse Spark

A modern lyrics management and viewing platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Viewer Interface**: Browse popular songs, new releases, and albums
- **CMS (Content Management System)**: Admin dashboard for managing posts, playlists, and genres
- **Authentication**: Secure admin login system
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd lyricverse-spark
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # Reusable UI components
├── contexts/        # React context providers (Auth, etc.)
├── pages/           # Page components
│   ├── Viewer pages (Index, Popular, Albums, etc.)
│   └── CMS pages (CMSDashboard, PostsManagement, etc.)
├── hooks/           # Custom React hooks
└── lib/            # Utility functions
```

## Authentication

Default admin credentials:
- Username: `admin`
- Password: `admin123`

**Note:** For production use, implement proper server-side authentication with JWT tokens and secure API endpoints.

## License

MIT
