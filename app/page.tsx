import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
      {/* Content container with max width and centered text */}
      <div className="max-w-2xl mx-auto text-center">
        {/* Name heading with gradient text effect - sky-500 to blue-500 gradient */}
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
          Tan Tran
        </h1>
        
        {/* About section with zinc-700 text in light mode, zinc-300 in dark mode (matching cursor rules) */}
        <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8">
          Hello! I&apos;m a passionate developer who loves building things for the web. I focus on creating clean, user-friendly experiences that solve real problems.
        </p>
        
        {/* Projects button with gradient background and hover effects */}
        <Link 
          href="/projects"
          className="inline-block px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}
