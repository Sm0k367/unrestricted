import { Button } from "@/components/ui/button"; // Assuming button will be created later
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome to
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 mt-2">
            Epic Tech AI
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          The Unrestricted Media Generation Platform.
        </p>
        <p className="text-md text-muted-foreground max-w-lg mx-auto">
          This is the starting point of your application. More content and features will be added soon!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {/* Placeholder for cn function or import from lib/utils */}
          {/* This Button component might not exist yet, or might be a basic HTML button for now */}
          {/* For now, we'll assume a basic button styling or that the component will be created. */}
          <Link href="/dashboard">
            <Button variant="gradient" size="xl">
              Go to Dashboard (Coming Soon)
            </Button>
          </Link>
          <Link href="#features">
             <Button variant="outline" size="xl">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

// Placeholder for Button if not yet created, to make file syntactically valid.
// In a real setup, this would be imported: import { Button } from "@/components/ui/button";
// If Button is not yet created, using a simple button for now:
// const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: string; size?: string}) => <button {...props}>{children}</button>;
// For the plan, we assume Button will be created or is available from a UI library.
// The subtask creating this file should be aware that @/components/ui/button may not exist yet.
// The scaffolding in step 1 did create frontend/src/components but not frontend/src/components/ui or button.tsx
// So, a placeholder Button will be used by the subtask if the real one is not found.
