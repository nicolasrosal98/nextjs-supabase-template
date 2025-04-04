# Next.js + Supabase Template

A modern, production-ready template for building applications with Next.js and Supabase.

![Landing Page](public/Next.js%20Supabase%20Template.png)

## Features

- **Modern Stack**

  - Next.js 14 with App Router
  - Supabase for backend services
  - TypeScript for type safety
  - Tailwind CSS for styling
  - shadcn/ui components

- **Code Quality**

  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript for type checking
  - CI workflow for automated checks

- **Authentication**
  - Supabase Auth with cookie-based sessions
  - Middleware for protected routes
  - Server-side authentication helpers

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/nicolasrosal98/nextjs-supabase-template.git
   cd nextjs-supabase-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type:check` - Check TypeScript types

## CI/CD

The project includes a GitHub Actions workflow that runs on every push and pull request to the main branch. It checks:

- Code quality with ESLint
- Type safety with TypeScript
- Code formatting with Prettier
- Build success

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── utils/           # Helper functions
├── .github/         # GitHub Actions workflows
└── public/          # Static assets
```

## Acknowledgements

This project is based on the [Next.js with Supabase example](https://github.com/vercel/next.js/tree/canary/examples/with-supabase) from the Vercel Next.js examples repository, which is licensed under the MIT License.

The original template's license can be found [here](https://github.com/vercel/next.js/blob/canary/LICENSE).
