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

        {/* Top 2 bigger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-lg p-4 md:p-8">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-xl">
                  GS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Dr. Gautam Sir
              </CardTitle>
              <CardDescription className="text-base text-[#3b7a57] dark:text-yellow-100">
                Founder & Chief Mentor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                Bachelor of Ayurvadic Medicine and Surgery (BAMS), 15+ years
                experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                chemistry
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-lg p-4 md:p-8">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-xl">
                  AS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Prof. Amit Sharma
              </CardTitle>
              <CardDescription className="text-base text-[#3b7a57] dark:text-yellow-100">
                Founder & Chief Mentor
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
        </div>

        {/* Middle 3 medium cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md p-4 md:p-6">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  GS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Dr. Gautam Singh
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Head of Department - Chemistry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.Sc. Chemistry, 18+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Chemistry Faculty
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md p-4 md:p-6">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  YB
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Dr. Yogesh Bist
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Head of Department - Biology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.Sc. in Biology, 10+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Biology Faculty
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md p-4 md:p-6">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  KK
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Krishna Kapoor
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Head of Department - Physics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100 mb-2">
                M.Sc. Physics, 15+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-xs border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Physics Faculty
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Bottom 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow p-3">
            <CardHeader>
              <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-base">
                  SS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Abhishek Sharma and Dheeraj Singh
              </CardTitle>
              <CardDescription className="text-xs text-[#3b7a57] dark:text-yellow-100">
                Chemistry Faculty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#3b7a57] dark:text-yellow-100 mb-1">
                M.Sc. Chemistry, 8+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-[10px] border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                NEET Specialist
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow p-3">
            <CardHeader>
              <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-base">
                  VK
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Vinay Kumar
              </CardTitle>
              <CardDescription className="text-xs text-[#3b7a57] dark:text-yellow-100">
                Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#3b7a57] dark:text-yellow-100 mb-1">
                M.Tech. CS, 7+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-[10px] border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Coding Mentor
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow p-3">
            <CardHeader>
              <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-base">
                  PK
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Priya Kapoor
              </CardTitle>
              <CardDescription className="text-xs text-[#3b7a57] dark:text-yellow-100">
                Social Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#3b7a57] dark:text-yellow-100 mb-1">
                M.A. Social Science, 6+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-[10px] border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                UPSC Mentor
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow p-3">
            <CardHeader>
              <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold text-base">
                  DS
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-base text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Deepak Sinha
              </CardTitle>
              <CardDescription className="text-xs text-[#3b7a57] dark:text-yellow-100">
                Hindi Faculty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#3b7a57] dark:text-yellow-100 mb-1">
                M.A. Hindi, 9+ years experience
              </p>
              <Badge
                variant="outline"
                className="text-[10px] border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e] bg-transparent"
              >
                Language Expert
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}