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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Computer className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  6 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                Lorem ipsum dolor sit amet.
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                sequi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    6 Months
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
                    ₹45,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
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
                Lorem ipsum dolor sit amet.
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                sequi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    4 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    20 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹35,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  8 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">lorem</CardTitle>
              <CardDescription className="dark:text-gray-400">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Soluta,sequi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    8 Months
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
                    ₹55,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  3 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                lorem ipsum dolor sit amet
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    3 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    30 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Fee:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    ₹25,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-8 w-8 text-red-600 dark:text-red-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  5 Months
                </Badge>
              </div>
              <CardTitle className="dark:text-white">lorem</CardTitle>
              <CardDescription className="dark:text-gray-400">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm dark:text-gray-300">Duration:</span>
                  <span className="text-sm font-medium dark:text-gray-100">
                    5 Months
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
                    ₹40,000
                  </span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* Card 6 */}
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
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
              <CardTitle className="dark:text-white">lorem</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, pr
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
        </div>
      </div>
    </section>
  );
}
