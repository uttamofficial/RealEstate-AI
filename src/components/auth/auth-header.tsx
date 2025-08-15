"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus, User, Settings, LogOut, Menu } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Check if Clerk is configured
const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Cube Logo Component
function CubeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2 7L12 12L22 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 4.5L7 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AuthHeader() {
  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Properties", href: "/properties" },
    { name: "Analytics", href: "/analytics" },
    { name: "AI Assistant", href: "/ai-assistant" },
  ];

  // If Clerk is not configured, show a simplified header
  if (!isClerkConfigured) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-slate-950/75">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg group-hover:shadow-xl">
                  <CubeLogo className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-200">
                  RealEstate AI
                </span>
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-3">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-200">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-slate-950/75">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg group-hover:shadow-xl">
                <CubeLogo className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-200">
                RealEstate AI
              </span>
            </Link>
          </div>

          {/* Navigation Links - Only visible when authenticated */}
          <SignedIn>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </SignedIn>

          {/* Auth Buttons and Theme Toggle */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle - Enhanced with better contrast */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-200">
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu - Only show when authenticated */}
            <SignedIn>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-6 flex flex-col gap-4">
                    <ThemeToggle />
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        Welcome back!
                      </span>
                      <UserButton 
                        appearance={{
                          elements: {
                            avatarBox: "w-9 h-9 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105",
                            userButtonPopoverCard: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl p-0",
                            userButtonPopoverActionButton: "text-black hover:text-black hover:bg-gray-100 dark:hover:bg-slate-800 rounded-none px-4 py-3 transition-all duration-200 font-bold border-b border-slate-100 dark:border-slate-700 last:border-b-0",
                            userButtonPopoverActionButtonText: "font-bold text-black",
                            userButtonPopoverFooter: "hidden",
                            userButtonPopoverUserPreview: "px-4 py-3 border-b border-slate-200 dark:border-slate-700",
                            userButtonPopoverUserPreviewMainIdentifier: "text-black font-bold text-base",
                            userButtonPopoverUserPreviewSecondaryIdentifier: "text-black text-sm font-medium",
                            userButtonPopoverActionButtonIcon: "text-black",
                            userButtonPopoverActionButtonIconBox: "w-5 h-5"
                          }
                        }}
                      />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </SignedIn>
            
            <SignedOut>
              <SignInButton>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 font-medium px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
              
              <SignUpButton>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-medium px-6 py-2 rounded-lg transform hover:scale-105 active:scale-95"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-600 dark:text-slate-300 hidden sm:block font-medium">
                  Welcome back!
                </span>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105",
                      userButtonPopoverCard: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl p-0",
                      userButtonPopoverActionButton: "text-black hover:text-black hover:bg-gray-100 dark:hover:bg-slate-800 rounded-none px-4 py-3 transition-all duration-200 font-bold border-b border-slate-100 dark:border-slate-700 last:border-b-0",
                      userButtonPopoverActionButtonText: "font-bold text-black",
                      userButtonPopoverFooter: "hidden",
                      userButtonPopoverUserPreview: "px-4 py-3 border-b border-slate-200 dark:border-slate-700",
                      userButtonPopoverUserPreviewMainIdentifier: "text-black font-bold text-base",
                      userButtonPopoverUserPreviewSecondaryIdentifier: "text-black text-sm font-medium",
                      userButtonPopoverActionButtonIcon: "text-black",
                      userButtonPopoverActionButtonIconBox: "w-5 h-5"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
