/**
 * Projects Page Component
 * 
 * This page displays a grid of portfolio projects.
 * Each project card shows:
 * - Project title
 * - Description
 * - Technologies used
 * - Links to GitHub and live demo (if available)
 * 
 * The grid is responsive:
 * - 1 column on mobile
 * - 2 columns on tablets
 * - 3 columns on desktop
 */

// Import Shad-CN Card components
// These provide a consistent, accessible card structure
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Define the structure of a project
// This is a TypeScript interface - it describes what properties a project should have
interface Project {
  id: number; // Unique identifier for each project
  title: string; // Project name
  description: string; // Brief description of what the project does
  technologies: string[]; // Array of technologies used (e.g., ["React", "TypeScript"])
  githubUrl?: string; // Optional GitHub link (the ? means it's not required)
  liveUrl?: string; // Optional live demo link
  imageUrl?: string; // Optional project image URL
}

// Sample project data - you can replace this with your actual projects
// This is an array of Project objects
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-app-demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current conditions and forecasts for multiple cities.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, syntax highlighting, and SEO optimization.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://your-blog-demo.com",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Analytics dashboard for tracking social media engagement and performance metrics.",
    technologies: ["React", "Python", "Django", "Chart.js"],
    githubUrl: "https://github.com/yourusername/social-analytics",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "Discover recipes based on ingredients you have, with dietary filters and nutritional information.",
    technologies: ["Vue.js", "Node.js", "Express", "Spoonacular API"],
    githubUrl: "https://github.com/yourusername/recipe-finder",
    liveUrl: "https://your-recipe-demo.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Container with max width to keep content centered on large screens */}
      <div className="max-w-7xl mx-auto">
        {/* Page Header Section */}
        <div className="text-center mb-12">
          {/* Main heading with gradient text effect - matches home page style */}
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          {/* Description text with zinc-700 in light mode, zinc-300 in dark mode */}
          <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A collection of projects I&apos;ve built. Each one represents a learning journey and a problem solved.
          </p>
        </div>

        {/* Projects Grid */}
        {/* 
          Grid layout:
          - grid: Creates a CSS grid container
          - gap-6: Space between grid items (1.5rem)
          - grid-cols-1: 1 column on mobile (default)
          - md:grid-cols-2: 2 columns on medium screens (tablets) and up
          - lg:grid-cols-3: 3 columns on large screens (desktop) and up
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 
            Map through the projects array and create a card for each project
            map() is a JavaScript array method that creates a new array by calling a function on each item
          */}
          {projects.map((project) => (
            // Each project card using Shad-CN Card component
            // key prop is required by React when rendering lists - it helps React track which items changed
            // h-full makes the card fill the grid cell height, flex flex-col allows content to stretch
            <Card
              key={project.id}
              className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden border-sky-100 dark:border-zinc-700"
            >
              {/* Project Image Placeholder (optional) */}
              {/* This section appears above the card header if an image is provided */}
              {project.imageUrl ? (
                <div className="w-full h-48 bg-gradient-to-br from-sky-400 to-blue-500">
                  {/* If you have project images, they would go here */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                // Placeholder gradient if no image is provided
                <div className="w-full h-48 bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-50">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Card Header - Contains title and description */}
              {/* CardHeader automatically provides proper spacing and styling */}
              <CardHeader>
                {/* CardTitle provides consistent heading styling */}
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </CardTitle>
                {/* CardDescription provides muted text styling for descriptions */}
                <CardDescription className="text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content - Main content area */}
              {/* flex-1 makes this section grow to fill available space */}
              <CardContent className="flex-1">
                {/* Technologies Used */}
                <div>
                  {/* Label for technologies */}
                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide">
                    Technologies
                  </p>
                  {/* 
                    Flex container for technology tags
                    flex-wrap allows tags to wrap to next line if needed
                    gap-2 adds space between tags
                  */}
                  <div className="flex flex-wrap gap-2">
                    {/* Map through technologies array and create a badge for each */}
                    {project.technologies.map((tech, index) => (
                      // Technology badge
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              {/* Card Footer - Contains action buttons/links */}
              {/* CardFooter provides proper spacing and alignment for footer content */}
              <CardFooter className="flex gap-3 border-t border-zinc-200 dark:border-zinc-700">
                {/* GitHub Link - only show if githubUrl exists */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank" // Opens link in new tab
                    rel="noopener noreferrer" // Security best practice for external links
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}

                {/* Live Demo Link - only show if liveUrl exists */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-600 hover:to-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
