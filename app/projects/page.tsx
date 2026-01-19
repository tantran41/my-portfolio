export default function Projects() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        {/* Heading with zinc-700 text in light mode, zinc-300 in dark mode */}
        <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-300">My Projects</h1>
        {/* Description text with zinc-700 in light mode, zinc-300 in dark mode */}
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          This is the projects page. Your projects will be displayed here.
        </p>
      </div>
    </div>
  );
}
