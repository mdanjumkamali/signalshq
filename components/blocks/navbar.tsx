"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Blog" },
  { name: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600" />
            <span className="relative flex h-full w-full items-center justify-center font-bold text-white">
              S
            </span>
          </div>
          <span className="font-semibold">SignalsHQ</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden lg:inline-flex text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
          >
            Log in
          </Button>
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-200">
            Sign up
          </Button>

          {/* Mobile Menu Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    className="flex items-center py-2 text-base font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-4" />
                <Button
                  variant="ghost"
                  className="justify-start px-0 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
