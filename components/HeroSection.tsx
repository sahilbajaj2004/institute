"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight, GraduationCap } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative pt-2 lg:pt-4 pb-8 lg:pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-900">
              Established 2010 • 15+ Years of Bajaj
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 dark:text-white">
              Shape Your Future with
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                Quality Education
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed dark:text-gray-300">
              Join thousands of successful students who have transformed their
              careers through our comprehensive offline programs. Expert
              faculty, modern facilities, and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto dark:border-gray-600 dark:text-gray-200"
                >
                  Schedule Campus Visit
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-8 mt-8 pt-8 border-t dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  Students Graduated
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  95%
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  Placement Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  50+
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  Expert Faculty
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Students in classroom"
              className="rounded-2xl shadow-2xl"
            />
            <div
              className="absolute -bottom-3 left-1/2 bg-white p-4 rounded-xl shadow-lg
          sm:-bottom-6 sm:-left-6
          -translate-x-1/2 sm:translate-x-0
          w-[90vw] max-w-xs sm:w-auto
          dark:bg-gray-900 dark:shadow-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full dark:bg-green-900">
                  <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold dark:text-white">
                    ISO Certified
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">
                    Quality Assured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
