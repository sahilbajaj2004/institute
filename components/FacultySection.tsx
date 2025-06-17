"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
            Our Faculty
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
            Our experienced faculty brings real-world expertise and academic
            bajaj to every classroom
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                  DR
                </AvatarFallback>
              </Avatar>
              <CardTitle className="dark:text-white">Dr. Sahil Bajaj</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Head of Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                bachelor of Computer Science, 1+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-200"
              >
                Expert in web development and AI
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                  PS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="dark:text-white">lorem</CardTitle>
              <CardDescription className="dark:text-gray-400">
                loremhgjgjhgjgjhgjhgjhgjh
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                , 12+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-200"
              >
                lorem
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                  AS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="dark:text-white">lorem</CardTitle>
              <CardDescription className="dark:text-gray-400">
                lorem hggdgdgdgd
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                18+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-200"
              >
                lorem hgfghdgdgfdg
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                  MG
                </AvatarFallback>
              </Avatar>
              <CardTitle className="dark:text-white">lorem jhghf</CardTitle>
              <CardDescription className="dark:text-gray-400">
                loremhghdgdgfdf
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2 dark:text-gray-400">
                10+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-200"
              >
                Communication Expert
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
