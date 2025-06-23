"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Microscope,
  Computer,
  Globe,
  Calculator,
  GraduationCap,
  Building,
} from "lucide-react";
import React from "react";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-20 bg-[#f9e98e]/40 dark:bg-[#1a2320] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            Our Programs
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            Choose Your Path to Success
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3b7a57] dark:text-yellow-100 font-medium">
            Comprehensive courses designed to build strong foundations and
            practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                NEET
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Expert-led NEET coaching program designed to build strong
                foundations in Physics, Chemistry, and Biology, aligned with the
                latest exam pattern and syllabus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    11 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    25 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    ₹1,10,000
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/neet">View Details</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Computer className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                JEE
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Comprehensive JEE coaching crafted by experienced faculty,
                focusing on deep conceptual clarity in Physics, Chemistry, and
                Mathematics, aligned with the latest exam trends.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    11 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    25 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    ₹1,10,000
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/jee">View Details</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-8 w-8 text-orange-600 dark:text-orange-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                NDA
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Expert-driven NDA coaching focused on academic excellence, and
                personality development, aligned with the latest exam syllabus
                and defense service standards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    10 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    15 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    ₹75,000
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/nda">View Details</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Foundation Batch
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Foundation coaching for classes 10th to 12th, focusing on
                academic excellence and personality development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    60 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    ₹80,000
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/foundation">View Details</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Card 5 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-8 w-8 text-yellow-600 dark:text-yellow-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Pre-University
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Classes for 11th and 12th (Science, Commerce, Arts) with
                comprehensive coverage, expert faculty, and personalized
                attention.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    40 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    ₹60,000
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/preuniversity">View Details</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Card 6 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-150 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-8 w-8 text-red-600 dark:text-red-300" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Primary-Secondary
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Classes for 1st to 10th grade with a focus on foundational
                skills and interactive learning. Subjects: Mathematics, Science,
                English, Social Studies, Hindi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Duration:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    12 Months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Batch Size:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    100 Students
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#3b7a57] dark:text-yellow-100">
                    Fee:
                  </span>
                  <span className="text-sm font-medium text-[#2d3a2e] dark:text-[#f9e98e]">
                    Depends on the class
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200 rounded-full transition-colors"
              >
                <Link href="/courses/primarysecondary">View Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
