"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Computer,
  Calculator,
  Microscope,
  Globe,
  Building,
  GraduationCap,
} from "lucide-react";
import React from "react";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-18 bg-gray-50 rounded-2xl dark:bg-[#181f2a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
            Our Programs
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
            Comprehensive courses designed to build strong foundations and
            practical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  11 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">NEET</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Expert-led NEET coaching program designed to build strong
                foundations in Physics, Chemistry, and Biology, aligned with the
                latest exam pattern and syllabus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    11 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    25 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹1,10,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Computer className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  11 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">JEE</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Comprehensive JEE coaching crafted by experienced faculty,
                focusing on deep conceptual clarity in Physics, Chemistry, and
                Mathematics, aligned with the latest exam trends.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    11 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    25 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹1,10,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  10 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">NDA</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Expert-driven NDA coaching focused on academic excellence, and
                personality development, aligned with the latest exam syllabus
                and defense service standards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    10 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    15 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹75,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="h-8 w-8 text-green-600 dark:text-green-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  4 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                Foundation Batch
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Expert-driven Foundation coaching focused on academic
                excellence, and personality development, aligned with the latest
                exam syllabus and defense service standards (For 10th to 12th).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    60 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹80,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  12 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">Pre-University</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Classes for 11th and 12th for all streams (Science, Commerce,
                and Arts) with comprehensive coverage of syllabus, expert
                faculty, and personalized attention.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    40 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹60,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>
          {/* Card 6 */}
          <Card className="transition-transform cursor-pointer hover:scale-110 hover:translate-x-2 duration-200 dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-8 w-8 text-red-600 dark:text-red-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  12 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                Primary-Secondary
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Classes for 1st to 10th grade with a focus on foundational
                skills, and interactive learning. Subjects covered include
                Mathematics, Science, English, Social Studies, and Hindi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    100 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    Depends on the class
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
