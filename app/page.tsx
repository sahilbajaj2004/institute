"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  GraduationCap,
  Building,
  Microscope,
  Computer,
  Calculator,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function InstituteWebsite() {



  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.currentTarget;
    const data = {
      access_key: "c81553c7-6bd2-4c55-80c7-fa95e009c1fc",
      first_name: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      last_name: (form.elements.namedItem("lastName") as HTMLInputElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      course: (form.elements.namedItem("course") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      newsletter: (form.elements.namedItem("newsletter") as HTMLInputElement)
        .checked
        ? "Yes"
        : "No",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setSuccess("Message sent successfully!");
      form.reset();
    } else {
      setSuccess("Failed to send message. Please try again.");
    }
  }


  
  
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex h-16 items-center justify-between">
          <a className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold dark:text-white">
              Bajaj Institute
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
            >
              Courses
            </a>
            <a
              href="#faculty"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
            >
              Faculty
            </a>
            <a
              href="#facilities"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
            >
              Facilities
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
            >
              Contact
            </a>
          </nav>
          <a href="#contact">
            <Button className="bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Enroll Now
            </Button>
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section
        className="relative pt-2 lg:pt-4 pb-8 lg:pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-900">
                Established 2010 • 15+ Years of Bajaj
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 dark:text-white">
                Shape Your Future with
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Quality Education
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed dark:text-gray-300">
                Join thousands of successful students who have transformed their
                careers through our comprehensive offline programs. Expert
                faculty, modern facilities, and proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#courses" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Explore Courses
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto dark:border-gray-600 dark:text-gray-200"
                  >
                    Schedule Campus Visit
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 border-t dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5000+
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">
                    Students Graduated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">
                    Placement Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">
                    Expert Faculty
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div
                className="absolute -bottom-3 left-1/2 bg-white p-4 rounded-xl shadow-lg
          sm:-bottom-6 sm:-left-6
          -translate-x-1/2 sm:translate-x-0
          w-[90vw] max-w-xs sm:w-auto
          dark:bg-gray-900 dark:shadow-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full dark:bg-green-900">
                    <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold dark:text-white">
                      ISO Certified
                    </div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">
                      Quality Assured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
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
                  Industry-aligned curriculum designed by experts to meet
                  current market demands and future trends.
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
                <CardTitle className="dark:text-white">
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-gray-400">
                  95% placement rate with students placed in top companies
                  across various industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Courses Section */}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta, sequi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
          lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta, sequi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae,
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          pr
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm dark:text-gray-300">
              Duration:
            </span>
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
      {/* Faculty Section */}
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
                <CardTitle className="dark:text-white">
                  Dr. Sahil Bajaj
                </CardTitle>
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
      {/* Facilities Section */}
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
          Modern facilities designed to enhance learning and provide the
          best educational experience
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
          Interactive whiteboards, projectors, and modern seating arrangements.
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
            <CardTitle className="dark:text-white">
          High-Tech Labs
            </CardTitle>
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
          Well-equipped labs for physics, chemistry, and biology experiments.
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
            <CardTitle className="dark:text-white">
          Digital Library
            </CardTitle>
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
            <CardTitle className="dark:text-white">
          Auditorium
            </CardTitle>
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
            <CardTitle className="dark:text-white">
          Cafeteria
            </CardTitle>
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
      {/* Testimonials */}
      <section className="py-12 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
              Student Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                      RK
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base dark:text-white">
                      Rahul Kumar
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Software Engineer at TCS
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi accusantium nesciunt per spiciatis mollitia dolorum at
                  praesentium earum placeat qui consequuntur aspernatur nobis
                  est ullam quaerat modi, voluptate dignissimos repellat!
                  Dolor!"
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                      SP
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base dark:text-white">
                      Sneha Patel
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Data Analyst at Infosys
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore eveniet quis non s imilique reiciendis illum maiores,
                  neque vero explicabo nesciunt facere quia hi c recusandae
                  dolorem deleniti quae velit? Porro, consectetur.."
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base dark:text-white">
                      Arjun Joshi
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Research Scientist
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  "lorem ips um dolor sit amet consectetu r adipisicing elit."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Results Section */}
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
              Our consistent track record of bajaj speaks for itself. Here are
              our achievements over the years.
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
                    Education bajaj 2024
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
                    Teaching Bajaj
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
                  <CardTitle className="dark:text-white">Sahil bajaj</CardTitle>
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
      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
              Visit Our Campus Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-gray-300">
              Schedule a campus tour or get in touch with our admissions team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-blue-900">
                  <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle className="dark:text-white">
                  Visit Our Campus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2 dark:text-gray-400">
                  E-5/99, gali no 2
                </p>
                <p className="text-muted-foreground mb-4 dark:text-gray-400">
                  india delhi
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="dark:border-gray-600 dark:text-gray-200"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-green-900">
                  <Phone className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle className="dark:text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2 dark:text-gray-400">
                  Admissions Helpline
                </p>
                <p className="font-semibold text-lg mb-4 dark:text-white">
                  +91 98110 57531
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="dark:border-gray-600 dark:text-gray-200"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-purple-900">
                  <Mail className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle className="dark:text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2 dark:text-gray-400">
                  General Inquiries
                </p>
                <p className="font-semibold mb-4 dark:text-white">
                  sahilbajaj0941gmail.com
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="dark:border-gray-600 dark:text-gray-200"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 py-4">
                <div className="space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Course of Interest
                      </label>
                      <select
                        name="course"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a course</option>
                        <option value="computer-science">
                          Computer Science & Programming
                        </option>
                        <option value="mathematics">
                          Mathematics & Statistics
                        </option>
                        <option value="science">Science & Research</option>
                        <option value="english">English & Communication</option>
                        <option value="business">Business & Management</option>
                        <option value="competitive">
                          Competitive Exam Prep
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2 mt-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        rows={4}
                        placeholder="Tell us about your educational goals and any specific questions you have..."
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        className="rounded dark:bg-gray-900 dark:border-gray-600"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-gray-600 dark:text-gray-300"
                      >
                        I would like to receive updates about courses and events
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg mt-4 dark:bg-blue-700 dark:hover:bg-blue-800"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Mail className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    {success && (
                      <div className="mt-4 text-center text-green-600 font-semibold dark:text-green-400">
                        {success}
                      </div>
                    )}
                  </form>
                  <div className="text-xs text-gray-400 text-center dark:text-gray-500">
                    We respect your privacy. Your information will not be
                    shared.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours & Map */}
            <div className="space-y-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 dark:text-white">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium dark:text-gray-200">
                      Monday - Friday
                    </span>
                    <span className="text-muted-foreground dark:text-gray-400">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium dark:text-gray-200">
                      Saturday
                    </span>
                    <span className="text-muted-foreground dark:text-gray-400">
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium dark:text-gray-200">
                      Sunday
                    </span>
                    <span className="text-red-600 font-medium dark:text-red-400">
                      Closed
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Campus Location
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Find us on the map and plan your visit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 dark:bg-gray-700">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2 dark:text-gray-300" />
                      <p className="text-gray-500 font-medium dark:text-gray-300">
                        Interactive Campus Map
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-400">
                        Google Maps integration
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 dark:border-gray-600 dark:text-gray-200"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 dark:border-gray-600 dark:text-gray-200"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-8 dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto dark:text-gray-300">
                Schedule a campus visit to explore our facilities, meet our
                faculty, and learn more about our programs. Our admissions team
                is here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Schedule Campus Tour
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="dark:border-gray-600 dark:text-gray-200"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0a101a] text-white py-12 rounded-t-2xl dark:bg-black dark:text-gray-100 shadow-2xl border-t-4 border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400 dark:text-blue-400" />
                <span className="text-xl font-bold">Bajaj Institute</span>
              </div>
              <p className="text-gray-400 mb-4 dark:text-gray-300">
                Empowering students with quality education and practical skills
                for a successful future.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors dark:hover:text-blue-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-white transition-colors dark:hover:text-blue-400"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#faculty"
                    className="hover:text-white transition-colors dark:hover:text-blue-400"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    className="hover:text-white transition-colors dark:hover:text-blue-400"
                  >
                    Facilities
                  </a>
                </li>
                <li>
          <a
            href="#contact"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Contact
          </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 dark:text-white">Programs</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-300">
            <li>
          <a
            href="#"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Computer Science
          </a>
            </li>
            <li>
          <a
            href="#"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Mathematics
          </a>
            </li>
            <li>
          <a
            href="#"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Science & Research
          </a>
            </li>
            <li>
          <a
            href="#"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Business Management
          </a>
            </li>
            <li>
          <a
            href="#"
            className="hover:text-white transition-colors dark:hover:text-blue-400"
          >
            Exam Preparation
          </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 dark:text-white">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-300">
            <li>E-5/99, gali no 2</li>
            <li>india delhi</li>
            <li>+91 98110 57531</li>
            <li>sahilbajaj0941@gmail.com</li>
          </ul>
        </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:border-gray-700 dark:text-gray-400">
        <p>
          &copy; 2024 bajaj Institute. All rights reserved. | Privacy Policy
          | Terms of Service
        </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
