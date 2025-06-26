# World of Warcraft Players - Next.js Application

A modern web application for looking up World of Warcraft character profiles using the Battle.net API. Built with Next.js 15, React 19, and TypeScript.

## Features

- 🔍 **Character Search**: Look up any World of Warcraft character by name and realm
- 🌍 **Multi-locale Support**: Support for different language locales
- 🎨 **Beautiful UI**: Modern interface with fire particle effects
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🔐 **Secure API Integration**: Proper Battle.net API authentication

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS with Gulp build process
- **Particles**: TSParticles for visual effects
- **API**: Battle.net API integration

## Prerequisites

Before running this application, you'll need:

1. **Battle.net API Credentials**: 
   - Client ID and Client Secret from the [Battle.net Developer Portal](https://develop.battle.net/)
   - These should be configured in your environment variables

2. **Node.js**: Version 18 or higher

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd wow-players-next-js
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory with your Battle.net API credentials:
   ```env
   BATTLENET_CLIENT_ID=your_client_id_here
   BATTLENET_CLIENT_SECRET=your_client_secret_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run scss` - Watch and compile SCSS files
- `npm run scss:compile` - Compile SCSS files once

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── battlenet/     # Battle.net API integration
│   │   └── wow-players/   # World of Warcraft players API
│   ├── components/        # React components
│   └── page.tsx          # Main page component
├── lib/                   # Utility libraries
├── styles/               # SCSS stylesheets
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## API Integration

The application integrates with the Battle.net API to fetch character data:

- **Character Profile Endpoint**: `/api/battlenet/character/[realm]/[name]/[locale]`
- **Authentication**: OAuth 2.0 with automatic token refresh
- **Data Retrieved**: Character level, class, race, faction, achievements, and more

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Battle.net API](https://develop.battle.net/) for providing the character data
- [Next.js](https://nextjs.org/) for the amazing React framework
- [TSParticles](https://particles.js.org/) for the particle effects
