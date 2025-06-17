"use client";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex h-16 items-center justify-between">
        <a className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold dark:text-white">
            Bajaj Institute
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
          >
            About
          </a>
          <a
            href="#courses"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
          >
            Courses
          </a>
          <a
            href="#faculty"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
          >
            Faculty
          </a>
          <a
            href="#facilities"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
          >
            Facilities
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
          >
            Contact
          </a>
        </nav>
        <a href="#contact">
          <Button className="bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Enroll Now
          </Button>
        </a>
      </div>
    </header>
  );
}
