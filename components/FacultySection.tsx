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
    <section
      id="faculty"
      className="py-20 bg-[#f9e98e]/60 dark:bg-[#2d3a2e]/90 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            Our Faculty
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            Learn from Industry Experts
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3b7a57] dark:text-yellow-100 font-medium">
            Our experienced faculty brings real-world expertise and academic
            excellence to every classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  DR
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Dr. Sahil Bajaj
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Head of Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                Bachelor of Computer Science, 1+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Expert in web development and AI
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  PS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Priya Sharma
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Senior Mathematics Faculty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.Sc. Mathematics, 12+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Olympiad Mentor
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  AS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Amit Singh
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Physics Faculty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.Sc. Physics, 18+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                JEE/NEET Specialist
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  MG
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Meena Gupta
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                English & Communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.A. English, 10+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
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
