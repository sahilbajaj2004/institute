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
      className="py-18 bg-gray-50 rounded-2xl dark:bg-[#181f2a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
            Our Facilities
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
            Modern facilities designed to enhance learning and provide the best
            educational experience
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
                  Smart Classrooms
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                Interactive Learning
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="h-8 w-8 text-green-600 dark:text-green-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  Computer Labs
                </Badge>
              </div>
              <CardTitle className="dark:text-white">High-Tech Labs</CardTitle>
              <CardDescription className="dark:text-gray-400">
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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Microscope className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  Science Labs
                </Badge>
              </div>
              <CardTitle className="dark:text-white">
                Science Laboratory
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-8 w-8 text-orange-600 dark:text-orange-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  Library
                </Badge>
              </div>
              <CardTitle className="dark:text-white">Digital Library</CardTitle>
              <CardDescription className="dark:text-gray-400">
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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-8 w-8 text-red-600 dark:text-red-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  Auditorium
                </Badge>
              </div>
              <CardTitle className="dark:text-white">Auditorium</CardTitle>
              <CardDescription className="dark:text-gray-400">
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
          <Card className="hover:shadow-lg transition-shadow dark:bg-[#232c3a] dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <Badge
                  variant="secondary"
                  className="dark:bg-gray-700 dark:text-gray-200"
                >
                  Cafeteria
                </Badge>
              </div>
              <CardTitle className="dark:text-white">Cafeteria</CardTitle>
              <CardDescription className="dark:text-gray-400">
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
