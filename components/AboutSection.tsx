"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-[#f9e98e]/60 dark:bg-[#2d3a2e]/90 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            About Prerna Institution
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            Empowering Students Since 2018
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#3b7a57] dark:text-yellow-100 font-medium">
            We are committed to providing world-class education through
            innovative teaching methods, experienced faculty, and
            state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2 border-[#3b7a57] dark:bg-[#3b7a57] dark:border-[#f9e98e]">
                <BookOpen className="h-7 w-7 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Expert Curriculum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] dark:text-yellow-100">
                Our teaching curriculum is crafted by professionals to match
                today’s competitive standards and tomorrow’s opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2 border-[#3b7a57] dark:bg-[#3b7a57] dark:border-[#f9e98e]">
                <Users className="h-7 w-7 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Small Class Sizes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] dark:text-yellow-100">
                Personalized attention with small batch sizes ensuring every
                student gets individual focus.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2 border-[#3b7a57] dark:bg-[#3b7a57] dark:border-[#f9e98e]">
                <Award className="h-7 w-7 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e] font-bold">
                Proven Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] dark:text-yellow-100">
                Students achieve high scores, leading to a 95% passing rate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
