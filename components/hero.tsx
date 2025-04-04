import { TriangleAlert } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-center">
        Next.js + Supabase Template
      </h1>
      <p className="text-xl lg:text-2xl text-muted-foreground mx-auto max-w-2xl text-center">
        A modern, production-ready template for building applications with
        Next.js and Supabase
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Modern Stack</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Next.js 14 with App Router</li>
            <li>• Supabase backend</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• shadcn/ui</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Code Quality</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• ESLint</li>
            <li>• Prettier</li>
            <li>• TypeScript</li>
            <li>• CI/CD</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Authentication</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Supabase Auth</li>
            <li>• Cookie-based sessions</li>
            <li>• Protected routes</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-sm w-full max-w-2xl">
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <TriangleAlert className="w-5 h-5" />
          <p className="font-medium">Important Setup Step</p>
        </div>
        <p className="mt-2 text-yellow-700 dark:text-yellow-300">
          Don't forget to add your Supabase credentials to{" "}
          <span className="font-mono">.env/.env.local</span> before running the
          application.
        </p>
      </div>
    </div>
  );
}
