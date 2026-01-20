"use client"; // Required because we're using React hooks (usePathname and useState)

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current page path
import { useState } from "react"; // Hook to manage the mobile menu open/closed state

/**
 * Header Component
 * 
 * This component creates a navigation header for the portfolio site.
 * It includes:
 * - A logo/name that links to the home page
 * - Navigation links to different sections
 * - Active link highlighting (shows which page you're currently on)
 * - Responsive design that works on mobile and desktop
 * - Professional hamburger menu for mobile devices
 * - Dark mode support matching the site's theme
 */
export default function Header() {
  // Get the current pathname (e.g., "/" or "/projects")
  // This tells us which page the user is currently viewing
  const pathname = usePathname();

  // State to track if the mobile menu is open or closed
  // useState returns an array: [currentValue, functionToUpdateValue]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Function to toggle the mobile menu open/closed
   * When called, it switches the menu state (open becomes closed, closed becomes open)
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Flip the current state
  };

  /**
   * Function to close the mobile menu
   * Called when user clicks a link or the overlay
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Helper function to check if a link is currently active
   * @param path - The path to check (e.g., "/" or "/projects")
   * @returns true if the current page matches the path, false otherwise
   */
  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
      {/* Container for header content with max width and padding */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section - links to home page */}
          <Link 
            href="/" 
            onClick={closeMenu} // Close menu when logo is clicked
            className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent hover:from-sky-600 hover:to-blue-600 transition-all duration-200"
          >
            Tan Tran
          </Link>

          {/* Desktop Navigation - hidden on mobile (md:flex), visible on medium screens and up */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home link - changes style when active */}
            <Link
              href="/"
              className={
                // If the current page is "/", use active styles, otherwise use normal styles
                isActiveLink("/")
                  ? "text-sky-500 dark:text-sky-400 font-semibold border-b-2 border-sky-500 dark:border-sky-400 transition-colors duration-200" // Active: blue color, bold, underline
                  : "text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 font-medium" // Normal: grey, changes to blue on hover
              }
            >
              Home
            </Link>
            
            {/* Projects link - changes style when active */}
            <Link
              href="/projects"
              className={
                // If the current page is "/projects", use active styles, otherwise use normal styles
                isActiveLink("/projects")
                  ? "text-sky-500 dark:text-sky-400 font-semibold border-b-2 border-sky-500 dark:border-sky-400 transition-colors duration-200" // Active: blue color, bold, underline
                  : "text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 font-medium" // Normal: grey, changes to blue on hover
              }
            >
              Projects
            </Link>
          </div>

          {/* Hamburger Menu Button - visible on mobile (md:hidden), hidden on medium screens and up */}
          <button
            onClick={toggleMenu} // Toggle menu when button is clicked
            className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Toggle menu" // Accessibility: screen readers will announce this
          >
            {/* Hamburger Icon - transforms to X when menu is open */}
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              {/* Top line of hamburger */}
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              {/* Middle line of hamburger */}
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Bottom line of hamburger */}
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - dark background that appears when menu is open */}
      {/* Fixed positioning covers entire screen, z-index ensures it's above content */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu} // Close menu when clicking the overlay
      />

      {/* Mobile Menu Panel - slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Menu</h2>
          {/* Close button (X icon) */}
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          {/* Home link */}
          <Link
            href="/"
            onClick={closeMenu} // Close menu when link is clicked
            className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActiveLink("/")
                ? "text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-500 dark:border-sky-400" // Active: blue text, light blue background, left border
                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-sky-500 dark:hover:text-sky-400" // Normal: grey text, changes on hover
            }`}
          >
            Home
          </Link>

          {/* Projects link */}
          <Link
            href="/projects"
            onClick={closeMenu} // Close menu when link is clicked
            className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActiveLink("/projects")
                ? "text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-500 dark:border-sky-400" // Active: blue text, light blue background, left border
                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-sky-500 dark:hover:text-sky-400" // Normal: grey text, changes on hover
            }`}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
