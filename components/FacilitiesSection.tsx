"use client";
import { Badge } from "@/components/ui/badge";
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
  BookOpen,
  Building,
  Award,
} from "lucide-react";
import React from "react";

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="py-20 bg-[#f9e98e]/40 dark:bg-[#2d3a2e]/90 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            Our Facilitie
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3b7a57] dark:text-yellow-100 font-medium">
            Modern facilities designed to enhance learning and provide the best
            educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Computer className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Smart Classrooms
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Interactive Learning
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Interactive whiteboards, projectors, and modern seating
                arrangements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Smart Classrooms"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="h-8 w-8 text-green-600 dark:text-green-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Computer Labs
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                High-Tech Labs
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Latest computers with high-speed internet and software tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Computer Lab"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Science Labs
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Science Laboratory
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Well-equipped labs for physics, chemistry, and biology
                experiments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Science Lab"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Library
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Digital Library
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Extensive collection of books, journals, and digital resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Library"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-8 w-8 text-red-600 dark:text-red-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Auditorium
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Auditorium
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                300-seat auditorium for seminars, presentations, and events.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Auditorium"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>

          {/* Card 6 */}
          <Card className="transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <Badge
                  variant="secondary"
                  className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-semibold"
                >
                  Cafeteria
                </Badge>
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Cafeteria
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Hygienic food court with variety of healthy meal options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Cafeteria"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
