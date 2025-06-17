"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Badge className="mb-3 dark:bg-blue-900 dark:text-blue-200">
            About Bajaj Institute
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 dark:text-white">
            Empowering Students Since 2010
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
            We are committed to providing world-class education through
            innovative teaching methods, experienced faculty, and
            state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-blue-900">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle className="dark:text-white">
                Expert Curriculum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                Industry-aligned curriculum designed by experts to meet current
                market demands and future trends.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-green-900">
                <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="dark:text-white">
                Small Class Sizes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                Personalized attention with small batch sizes ensuring every
                student gets individual focus.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 dark:bg-purple-900">
                <Award className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle className="dark:text-white">Proven Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400">
                95% placement rate with students placed in top companies across
                various industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
