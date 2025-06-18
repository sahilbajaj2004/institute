"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9e98e]/90 dark:bg-[#2d3a2e]/80 backdrop-blur-lg supports-[backdrop-filter]:bg-[#f9e98e]/60 dark:supports-[backdrop-filter]:bg-[#2d3a2e]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex h-16 items-center justify-between">
        <a className="flex items-center gap-3" href="#hero">
          {/* <img
            src="/logo.png"
            alt="Prerna Institution Logo"
            className="h-12 w-12 rounded-full border-2 border-[#f9e98e] dark:border-[#4a5c47] bg-white dark:bg-[#2d3a2e] shadow"
            style={{ objectFit: "cover" }}
          /> */}
          <span className="text-2xl font-extrabold tracking-wide text-[#2d3a2e] dark:text-[#f9e98e] drop-shadow">
            Prerna Institution
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#about"
            className="text-base font-semibold text-[#2d3a2e] dark:text-[#f9e98e] hover:text-[#3b7a57] dark:hover:text-yellow-300 transition-colors"
          >
            About
          </a>
          <a
            href="#courses"
            className="text-base font-semibold text-[#2d3a2e] dark:text-[#f9e98e] hover:text-[#3b7a57] dark:hover:text-yellow-300 transition-colors"
          >
            Courses
          </a>
          <a
            href="#faculty"
            className="text-base font-semibold text-[#2d3a2e] dark:text-[#f9e98e] hover:text-[#3b7a57] dark:hover:text-yellow-300 transition-colors"
          >
            Faculty
          </a>
          <a
            href="#facilities"
            className="text-base font-semibold text-[#2d3a2e] dark:text-[#f9e98e] hover:text-[#3b7a57] dark:hover:text-yellow-300 transition-colors"
          >
            Facilities
          </a>
          <a
            href="#contact"
            className="text-base font-semibold text-[#2d3a2e] dark:text-[#f9e98e] hover:text-[#3b7a57] dark:hover:text-yellow-300 transition-colors"
          >
            Contact
          </a>
        </nav>
        <a href="#contact">
          <Button className="bg-[#3b7a57] hover:bg-[#2d3a2e] text-white font-bold dark:bg-yellow-300 dark:text-[#2d3a2e] dark:hover:bg-yellow-200 shadow-md transition-colors">
            Enroll Now
          </Button>
        </a>
      </div>
    </header>
  );
}
