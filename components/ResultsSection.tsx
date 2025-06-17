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
  GraduationCap,
  Award,
  Star,
  Building,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import React from "react";

export default function ResultsSection() {
  return (
    <section className="py-15 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Our Achievements
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Outstanding Results & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
            Our consistent track record of excellence speaks for itself. Here
            are our achievements over the years.
          </p>
        </div>
        {/* Overall Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-blue-900">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                95%
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Overall Pass Rate
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-green-900">
                <Award className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-600 dark:text-green-300">
                92%
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Placement Success
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-purple-900">
                <Star className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle className="text-3xl font-bold text-purple-600 dark:text-purple-300">
                150+
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Top Rankers
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-orange-900">
                <Building className="h-8 w-8 text-orange-600 dark:text-orange-300" />
              </div>
              <CardTitle className="text-3xl font-bold text-orange-600 dark:text-orange-300">
                500+
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                School Tie-ups
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        {/* Year-wise Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Year-wise Performance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-blue-600 dark:text-blue-300">
                  2023-24
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Total Students:
                  </span>
                  <span className="font-bold dark:text-white">1,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Pass Rate:
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-300">
                    96%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Placements:
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-300">
                    94%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Top Scorers:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-300">
                    65
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-blue-600 dark:text-blue-300">
                  2022-23
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Total Students:
                  </span>
                  <span className="font-bold dark:text-white">1,180</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Pass Rate:
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-300">
                    94%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Placements:
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-300">
                    91%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Top Scorers:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-300">
                    58
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-blue-600 dark:text-blue-300">
                  2021-22
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Total Students:
                  </span>
                  <span className="font-bold dark:text-white">1,050</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Pass Rate:
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-300">
                    93%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Placements:
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-300">
                    89%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-gray-200">
                    Top Scorers:
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-300">
                    52
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Top Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Recent Achievements & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-yellow-900">
                  <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                </div>
                <CardTitle className="text-sm dark:text-white">
                  Best Institute Award
                </CardTitle>
                <CardDescription className="text-xs dark:text-gray-400">
                  Education Excellence 2024
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-blue-900">
                  <Star className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle className="text-sm dark:text-white">
                  ISO 9001:2015
                </CardTitle>
                <CardDescription className="text-xs dark:text-gray-400">
                  Quality Certification
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-green-900">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle className="text-sm dark:text-white">
                  Top Placement
                </CardTitle>
                <CardDescription className="text-xs dark:text-gray-400">
                  Regional Recognition
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow dark:bg-gray-800/80 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-purple-900">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle className="text-sm dark:text-white">
                  Innovation Award
                </CardTitle>
                <CardDescription className="text-xs dark:text-gray-400">
                  Teaching Excellence
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        {/* Top Performers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Star Performers 2023-24
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 dark:from-yellow-900 dark:to-orange-900 dark:border-yellow-700">
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-yellow-900">
                  <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">
                    1st
                  </span>
                </div>
                <CardTitle className="dark:text-white">Sahil Bajaj</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Computer Science Program
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                  Score: 98.5%
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300">
                  Placed at Google
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Package: ₹18 LPA
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 dark:from-gray-900 dark:to-slate-900 dark:border-gray-700">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-gray-800">
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-200">
                    2nd
                  </span>
                </div>
                <CardTitle className="dark:text-white">Rahul Kumar</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Mathematics Program
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                  Score: 97.8%
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300">
                  Placed at Microsoft
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Package: ₹15 LPA
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 dark:from-orange-900 dark:to-red-900 dark:border-orange-700">
              <CardHeader className="text-center">
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-orange-900">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-300">
                    3rd
                  </span>
                </div>
                <CardTitle className="dark:text-white">Anita Singh</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Science & Research
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                  Score: 96.9%
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300">
                  Research Position
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Package: ₹12 LPA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200 dark:bg-gray-800/80 dark:border-green-700">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Be Part of Our Success Story
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto dark:text-gray-300">
              Join thousands of successful students who have achieved their
              dreams through our proven programs. Your success story could be
              next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
              >
                View Detailed Results
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-200"
              >
                Download Result Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
